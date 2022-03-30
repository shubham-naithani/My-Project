using Microsoft.AspNetCore.Http;
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
    [Route("Teacher[controller]")]
    [ApiController]
    public class TeacherControler : ControllerBase
    {
        public SMSContext sms;
        public IConfiguration config;

        public TeacherControler(SMSContext smscon, IConfiguration configuration)
        {
            sms = smscon;
            config = configuration;
        }

        //--------------------------------------------------     Teacher Joining Form     -------------------------------------------------

        [Route("Teacher_joining_form")]
        [HttpPost]

        public ApiResponse teacherjoiningform([FromBody] TeacherJoiningFormModel joiningform)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Teacher_tbl.FirstOrDefault(x => x.IsActive == true && x.IsDeleted == false &&x.ContactNo == joiningform.ContactNo);

                if (data != null)
                {
                    response.Message = "SORRY User Already Exist";
                    response.StatusCode = HttpStatusCode.BadRequest;
                }
                else
                {
                    TeacherTable teach = new TeacherTable
                    {
                        FirstName = joiningform.FirstName,
                        LastName = joiningform.LastName,
                        DOB = joiningform.DOB,
                        Age = joiningform.Age,
                        Gender = joiningform.Gender,
                        Email = joiningform.Email,
                        ContactNo = joiningform.ContactNo,
                        ADDRESS = joiningform.ADDRESS,
                        Cast = joiningform.Cast,
                        Religion = joiningform.Religion,
                        Nationality = joiningform.Nationality,
                        MaritialStatus = joiningform.MaritialStatus,
                        Qualification = joiningform.Qualification,
                        SubjectsYouCanTeach = joiningform.SubjectsYouCanTeach,
                        ExperienceOfTeaching = joiningform.ExperienceOfTeaching,
                        CreatedBy = joiningform.FirstName
                    };
                    sms.Teacher_tbl.Add(teach);
                    int isSaved = sms.SaveChanges();
                    if (isSaved > 0)
                    {
                        response.Message = "OK your Joining form has been saved";
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
