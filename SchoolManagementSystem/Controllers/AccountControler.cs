using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SchoolManagementSystem.AccountModel;
using SchoolManagementSystem.CommonServices;
using SchoolManagementSystem.DAL.ContextFille;
using SchoolManagementSystem.DAL.Tabels;
using SchoolManagementSystem.Interfaces;
using SchoolManagementSystem.Model;
using System;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

namespace SchoolManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountControler : ControllerBase
    {

        public SMSContext sms;
        public IConfiguration config;
        public SendOtp _otpSender;
        private readonly ITokenService _tokenservice;
        public AccountControler(SMSContext smscon, IConfiguration configuration, SendOtp sendOtp,ITokenService tokenservice)
        {
            sms = smscon;
            config = configuration;
            _otpSender = sendOtp;
            _tokenservice = tokenservice;
        }

        //------------------------------------------        REGISTER HERE        --------------------------------------------- 

        [Route("Registeration")]
        [HttpPost]
        public ApiResponse RegStudent([FromBody] RegisterationModel mod)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                Random r = new Random();
                int result = r.Next(1000, 9999);
                DateTime OtpGenerate = DateTime.UtcNow;

                var data = sms.Registeration_tbl.FirstOrDefault(x => x.IsActive == true && x.IsDeleted == false && x.ContactNo == "+91" + mod.ContactNo);
                if (data != null)
                {
                    response.Message = "SORRY User Already Exist";
                    response.StatusCode = HttpStatusCode.BadRequest;
                }
                else
                {
                    using var hmac = new HMACSHA512();
                    RegisterationTable reg = new RegisterationTable
                    {
                        FirstName = mod.FirstName,
                        LastName = mod.LastName,
                        Email = mod.Email,
                        PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(mod.Password)),
                        PasswordSalt = hmac.Key,
                        DOB = mod.DOB,
                        ContactNo = "+91" + mod.ContactNo,
                        Role = mod.Role,
                        OtpGenerateDateTime = OtpGenerate,
                        otp = result.ToString(),
                        IsVerified = false,
                        CreatedBy = mod.FirstName,
                        Created_DateTime = DateTime.UtcNow,
                    };
                    sms.Registeration_tbl.Add(reg);
                    int isSaved = sms.SaveChanges();
                    if (isSaved > 0)
                    {
                        string account_sid = config.GetValue<string>("Twilio:account_sid");
                        string auth_token = config.GetValue<string>("Twilio:auth_token");
                        string from = config.GetValue<string>("Twilio:twilio_number");
                        string to = reg.ContactNo;
                        TwilioClient.Init(account_sid, auth_token);
                        var msg = MessageResource.Create(
                            to: to,
                            from: from,
                            body: "Your OTP Is: " + reg.otp);

                        response.Message = "OK Student Details Are Saved Check Your  OTP";
                        response.StatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        response.Message = "SORRY Data Not Saved";
                        response.StatusCode = HttpStatusCode.BadRequest;
                    }
                }
            }
            catch (Exception exp)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Message = exp.Message;
            }
            return response;
        }

        //--------------------------------------------------           LOGIN          ------------------------------------------

        [Route("Login")]
        [HttpPost]
        public ApiResponse Login([FromBody] LoginModel log)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Registeration_tbl.FirstOrDefault(x => x.IsActive == true && x.IsDeleted == false && x.Email == log.Email );
                if (data != null)
                {
                    using var hmac = new HMACSHA512(data.PasswordSalt);
                    var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(log.Password));
                    for (int i = 0; i < computedHash.Length; i++)
                    {
                        if (computedHash[i] != data.PasswordHash[i])
                        {
                            response.Message = "Invalid Password";
                            response.StatusCode = HttpStatusCode.BadRequest;
                            return response;
                        }
                        else
                        {
                            response.Message = "WELCOME" + data.FirstName;
                            response.StatusCode = HttpStatusCode.OK;
                            response.token = _tokenservice.CreateToken(data);
                        }                       
                    }
                }
                else
                {
                    response.Message = "SORRY Username is Incorrect";
                    response.StatusCode = HttpStatusCode.BadRequest;
                }          
            }
            catch (Exception exp)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Message = exp.Message;
            }
            return response;
        }

        //------------------------------------------------------        VERIFY OTP       ----------------------------------------

        [Route("VerifyOTP")]
        [HttpPost]
        public ApiResponse VerifyOtpStudent(OtpModel otp)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Registeration_tbl.FirstOrDefault(x => x.IsActive == true && x.IsDeleted == false && x.otp == otp.OTP);

                if (data != null)
                {
                    DateTime time = data.OtpGenerateDateTime;
                    DateTime time2 = DateTime.UtcNow;
                    TimeSpan time3 = time2 - time;
                    var min = time3.TotalMinutes;
                    if (data.IsVerified == true)
                    {
                        response.Message = "You Are Already Verified You Are Redirecting To Login Page http://localhost:4200/Login";
                        response.StatusCode = HttpStatusCode.Redirect;
                    }
                    else if (data.otp == otp.OTP && min < 10)
                    {
                        data.IsVerified = true;
                        sms.Registeration_tbl.Update(data);
                        sms.SaveChanges();
                        response.Message = "OTP Verified";
                        response.StatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        response.Message = "Your OTP Is Incorrect";
                        if (min > 10)
                        {
                            string newOtp = "" + "";
                            _ = _otpSender.SendOTP(otp.ContactNo, newOtp);
                            response.Message = "A OTP has been sent to your number";
                        }
                        {
                            response.Message = "";
                            response.StatusCode = HttpStatusCode.BadRequest;
                        }
                        response.StatusCode = HttpStatusCode.BadRequest;
                    }
                }
                else
                {
                    response.Message = "User Not Found";
                    response.StatusCode = HttpStatusCode.NotFound;
                }
            }
            catch (Exception exp)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Message = exp.Message;
            }
            return response;
        }

        //---------------------------------------------           RESEND OTP          ----------------------------------

        [Route("ResendOTP")]
        [HttpPost]
        public ApiResponse ResendOtp([FromBody] OtpModel otp)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                if (otp != null)
                {
                    var data = sms.Registeration_tbl.FirstOrDefault(x => x.IsActive == true && x.IsDeleted == false && x.ContactNo == otp.ContactNo);

                    if (data != null)
                    {
                        Random r = new Random();
                        int result = r.Next(1000, 9999);
                        DateTime OtpGenerate = DateTime.UtcNow;
                        data.otp = result.ToString();
                        sms.Registeration_tbl.Update(data);
                        int isSaved = sms.SaveChanges();
                        if (isSaved > 0)
                        {
                            string account_sid = config.GetValue<string>("Twilio:account_sid");
                            string auth_token = config.GetValue<string>("Twilio:auth_token");
                            string from = config.GetValue<string>("Twilio:twilio_number");
                            string to = data.ContactNo;
                            TwilioClient.Init(account_sid, auth_token);
                            var msg = MessageResource.Create(
                                to: to,
                                from: from,
                                body: "Your OTP Is: " + data.otp);
                            response.Message = "OTP sended successfully";
                            response.StatusCode = HttpStatusCode.OK;
                        }
                        else
                        {
                            response.Message = "SORRY Data Not Saved";
                            response.StatusCode = HttpStatusCode.BadRequest;
                        }
                    }
                }
            }
            catch (Exception exp)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Message = exp.Message;
            }
            return response;
        }     

        //------------------------------------------------        FORGET PASSWORD         -----------------------------------

        [Route("Forget-Password")]
        [HttpPost]
        public ApiResponse ForgetPassword([FromBody] PasswordModel pass)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Registeration_tbl.FirstOrDefault(x => x.IsActive == true && x.IsDeleted == false && x.ContactNo == "+91"+pass.ContactNo);
                if (data != null)
                {
                    response.Message = "Reset";
                    response.StatusCode = HttpStatusCode.OK;
                }
                else
                {
                    response.Message = "SignUp";
                    response.StatusCode = HttpStatusCode.OK;
                }
            }
            catch (Exception exp)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Message = exp.Message;

            }
            return response;
        }

        //-------------------------------------------             RESET PASSWORD            ---------------------------------

        [Route("Reset-Password")]
        [HttpPost]
        public ApiResponse ResetPassword([FromBody] PasswordModel reset)
            {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Registeration_tbl.FirstOrDefault(x => x.IsActive == true && x.IsDeleted == false);
                if (data != null)
                {
                    using var hmac = new HMACSHA512();
                    data.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(reset.Password));
                    data.PasswordSalt = hmac.Key;

                    sms.Registeration_tbl.Update(data);
                    int Issaved = sms.SaveChanges();
                    if (Issaved > 0)
                    {
                        response.Message = "OK your password has been changed now login";
                        response.StatusCode = HttpStatusCode.OK;
                    }
                }
                else
                {
                    response.Message = "contact no is invalid";
                    response.StatusCode = HttpStatusCode.BadRequest;
                }
            }
            catch (Exception exp)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                response.Message = exp.Message;

            }
            return response;
        }
    }
}



