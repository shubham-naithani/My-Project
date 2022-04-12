using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SchoolManagementSystem.DAL.ContextFille;
using SchoolManagementSystem.Model;
using SchoolManagementSystem.CommonServices;
using SchoolManagementSystem.Model.AdminModel;
using System.Linq;
using System.Net;
using System;
using SchoolManagementSystem.DAL.Tabels;
using SchoolManagementSystem.AccountModel.AdminModel;
using SchoolManagementSystem.AccountModel;
using SchoolManagementSystem.Services;
using System.Collections.Generic;

namespace SchoolManagementSystem.Controllers

{
    [Route("admin[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        public SMSContext sms;
        private readonly IEmailSender _emailSender;
        public IConfiguration config;

        public object Summaries { get; private set; }

        public AdminController(SMSContext smscon, IConfiguration configuration, IEmailSender emailSender)
        {
            sms = smscon;
            config = configuration;
            _emailSender = emailSender;
        }

        //-------------------------------------------------------          GET JOINING FORM PENDING REQUESTS      -------------------------------------------


        [Route("get_pending_form_requests")]
        [HttpGet]
        public ApiResponse teacherGet()
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Teacher_tbl.Where(a => a.IsActive == true && a.IsDeleted == false && a.Approved == false).ToList();
                if (data.Count > 0)
                {
                    response.Message = "Showing Records";
                    response.StatusCode = HttpStatusCode.OK;
                    response.ResponseData = data;
                }
                else
                {
                    response.Message = "Something Wrong";
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


        //------------------------------------------------------------GET JOINING FORM APPROVED REQUESTS----------------------------------------------------


        [Route("get_approved_requests")]
        [HttpGet]
        public ApiResponse getApprovedRequests()
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Teacher_tbl.Where(a => a.IsActive == true && a.IsDeleted == false && a.Approved == true).ToList();
                if (data.Count > 0)
                {
                    response.Message = "Showing Records";
                    response.StatusCode = HttpStatusCode.OK;
                    response.ResponseData = data;
                }
                else
                {
                    response.Message = "No Record";
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

        //-----------------------------------------------------------POST JOINING FORM APPROVED REQUESTS------------------------------------------------------

        [Route("post_approved_requests")]
        [HttpPost]
        public ApiResponse postApprovedRequest([FromBody] TeacherJoiningFormModel mod)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Teacher_tbl.FirstOrDefault(a => a.IsActive == true && a.IsDeleted == false);
                if (data != null)
                {
                    data.ClassesYouWillTeach = mod.ClassesYouWillTeach;
                    data.YourPeriods = mod.YourPeriods;
                    data.Approved = true;
         
                    sms.Teacher_tbl.Update(data);
                    int isSaved = sms.SaveChanges();
                    if (isSaved > 0)
                    {
                        response.Message = data.FirstName + " " +  "joining form request has been approved";
                        response.StatusCode = HttpStatusCode.OK;
                        var message = new Message(new string[] 
                        //to
                        { "naithanishubham0@gmail.com" }, 
                        //heading
                        "Joining Form Approved",
                        //body
                        "HOGWARTS MANAGEMENT" +
                        "CONGRATULATION {{name}}" +
                        "Hello your teaching joinig form for HOGWARTS has been approved by Admin" +
                        "Now you can join HOGWARTS from next 1 date" +
                        "Your classes and periods have been refelected shortly to you account" +
                        "Your annual salary is : 5 lakh" +
                        "For any other question feel free to ask at" +
                        "HogwartsHelpline@info.in" +
                        "TNANKING YOU" +
                        "Have A Great Day" +
                        "ADMIN : Shubham"
                        );
                        _emailSender.SendEmail(message);
                    }  
                    else
                    {
                        response.Message = "SORRY Data Not Saved";
                        response.StatusCode = HttpStatusCode.BadRequest;
                    }
                }
                else
                {
                    response.Message = "Something Wrong";
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


        //-------------------------------------------------------------DELETE JOINING FORM ----------------------------------------------

        [Route("delete_joining-form/{id}")]
        [HttpDelete]
        public ApiResponse deljoiningform( int id)
        {
            ApiResponse response = new ApiResponse();
            {
                try
                {
                    var data = sms.Teacher_tbl.FirstOrDefault(a => a.IsActive == true && a.IsDeleted == false && a.ID == id);
                    if (data != null)
                    {
                        data.IsActive = false;
                        data.IsDeleted = true;
                        data.Approved = false;

                        sms.Teacher_tbl.Update(data);
                        int isSaved = sms.SaveChanges();
                        if (isSaved > 0)
                        {
                            response.Message = "Successfully Deleted";
                            response.StatusCode = HttpStatusCode.OK;
                        }
                        else
                        {
                            response.Message = "Record Not Deleted";
                            response.StatusCode = HttpStatusCode.NotFound;
                        }
                    }
                    else
                    {
                        response.StatusCode = HttpStatusCode.BadRequest;
                    }
                }
                catch (Exception exp)
                {
                    response.StatusCode = HttpStatusCode.InternalServerError;
                    response.Message = exp.Message;
                }
            }
            return response;
        }

        //----------------------------------------------------------GET DELETED TAECHER JOINING FORM------------------------------------------------------------

        [Route("get_deleteted_joining-form")]
        [HttpGet]
        public ApiResponse getDleteRequests()
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Teacher_tbl.Where(a => a.IsActive == false && a.IsDeleted == true && a.Approved == false).ToList();
                if (data.Count > 0)
                {
                    response.Message = "Showing Records";
                    response.StatusCode = HttpStatusCode.OK;
                    response.ResponseData = data;
                }
                else
                {
                    response.Message = "No Record";
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
