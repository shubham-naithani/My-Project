using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SchoolManagementSystem.AccountModel;
using SchoolManagementSystem.DAL.ContextFille;
using SchoolManagementSystem.DAL.Tabels;
using SchoolManagementSystem.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Controllers
{
    [Route("student[controller]")]
    [ApiController]
    public class Studentcontroller:ControllerBase
    {
        public SMSContext sms;
        public IConfiguration config;

        public Studentcontroller(SMSContext smscon,IConfiguration configuration)
        {
            sms = smscon;
            config = configuration;
        }


     //------------------------------------------------     Student Admission Form    ------------------------------------------------------

        [Route("Admission_form")]
        [HttpPost]

        public ApiResponse admissionform([FromBody] StudentAdmModel admission)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Student_tbl.FirstOrDefault(x => x.IsActive == true && x.IsDeleted == false);

                if (data != null)
                {
                    response.Message = "SORRY User Already Exist";
                    response.StatusCode = HttpStatusCode.BadRequest;
                }
                else
                {
                    StudentTable std = new StudentTable
                    {
                        FirstName = admission.FirstName,
                        LastName = admission.LastName,
                        DOB = admission.DOB,
                        FathersName = admission.FathersName,
                        ADDRESS = admission.ADDRESS,
                        Email = admission.Email,
                        ContactNo = admission.ContactNo,
                        Gender = admission.Gender,
                        City = admission.City,
                        Pincode = admission.Pincode,
                        State = admission.State,
                        Cast = admission.Cast,
                        Religion = admission.Religion,
                        Nationality = admission.Nationality,
                        Class = admission.Class,
                        CreatedBy = admission.FirstName
                    };
                    sms.Student_tbl.Add(std);
                    int isSaved = sms.SaveChanges();
                    if (isSaved > 0)
                    {
                        response.Message = "OK student admission form has been saved";
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
    }
}
