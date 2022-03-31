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

namespace SchoolManagementSystem.Controllers

{
    [Route("admin[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        public SMSContext sms;
        public IConfiguration config;
        public AdminController(SMSContext smscon, IConfiguration configuration)
        {
            sms = smscon;
            config = configuration;
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
                        response.Message = data.FirstName + " " +  "joining request has been approved";
                        response.StatusCode = HttpStatusCode.OK;
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
        public ApiResponse deljoiningform()
        {
            ApiResponse response = new ApiResponse();
            {
                try
                {
                    var data = sms.Teacher_tbl.FirstOrDefault(a => a.IsActive == true && a.IsDeleted == false);
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
    }

}
