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


        //[Route("joining-form-approval")]
        //[HttpGet]
        //public ApiResponse joiningform([FromBody] TeacherJoiningFormModel joining)
        //{
        //    ApiResponse response = new ApiResponse();
        //    try
        //    {
        //        var data = sms.Teacher_tbl.Where(a => a.IsActive == true && a.IsDeleted == false).ToList();
        //        if (data!=null)
        //        {
        //            TeacherTable teacher = new TeacherTable
        //            {
        //                Approved = true
        //            };
        //            sms.Teacher_tbl.Add(teacher);
        //            int Issaved = sms.SaveChanges();
        //            if (Issaved>0)
        //            {
        //                response.StatusCode = HttpStatusCode.OK;
        //                response.Message = "OK you are Approved Now";
        //            }
        //            else
        //            {
        //                response.Message = "SORRY Somethings Wrong";
        //                response.StatusCode = HttpStatusCode.BadRequest;
        //            }
        //        }
        //    }
        //    catch (Exception exp)
        //    {
        //        response.StatusCode = HttpStatusCode.InternalServerError;
        //        response.Message = exp.Message;
        //    }
        //    return response;
        //}


//-------------------------------------------------------          GET TEACHER       -------------------------------------------



        [Route("get_Teacher")]
        [HttpGet]
        public ApiResponse teacherGet()
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Teacher_tbl.Where(a => a.IsActive == true && a.IsDeleted == false).ToList();
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


        //-----------------------------------------------------           EDIT TEACHER         ----------------------------------


        [Route("edit-teachers")]
        [HttpPost]
        public ApiResponse editteachers([FromBody] TeacherModel data)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var Data = sms.Teacher_tbl.FirstOrDefault(a => a.IsActive == true && a.IsDeleted == false && a.ID == data.teacher_ID);
                if (data != null)
                {
                    Data.ID = data.teacher_ID;
                    Data.FirstName = data.FirstName;
                    Data.LastName = data.LastName;
                    Data.Email = data.Email;
                    Data.DOB = data.DOB;
                    Data.ContactNo= data.ContactNo;


                    sms.Teacher_tbl.Update(Data);
                    int isSaved = sms.SaveChanges();
                    if (isSaved > 0)
                    {
                        response.Message = "Successfully Saved";
                        response.StatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        response.StatusCode = HttpStatusCode.BadRequest;
                    }
                }
                else
                {
                    response.Message = "Not Updated";
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



        //-----------------------------------------------------          DELETE TEACHER        --------------------------------



        [Route("delete_teacher/{id}")]
        [HttpDelete]
        public ApiResponse delteacher(int id)
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



    


     //--------------------------------------------------------         STUDENT          ---------------------------------------
                                                                    //GET STUDENTS


        [Route("get_students")]
        [HttpGet]
        public ApiResponse StudentGet()
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var data = sms.Student_tbl.Where(a => a.IsActive == true && a.IsDeleted == false).ToList();
                if (data != null)
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


     //--------------------------------------------------           EDIT STUDENTS            ------------------------------------



        [Route("edit_students")]
        [HttpPost]
        public ApiResponse editstudents([FromBody] StudentModel data)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var Data = sms.Student_tbl.FirstOrDefault(a => a.IsActive == true && a.IsDeleted == false);
                if (data != null)
                {
                    StudentTable student = new StudentTable
                    {
                        FirstName = data.FirstName,
                        LastName = data.LastName,
                        Email = data.Email,
                        DOB = data.DOB,
                        ContactNo = data.ContactNo,
                        CreatedBy = "Admin",
                        Created_DateTime = DateTime.UtcNow
                    };
                    sms.Student_tbl.Update(student);
                    int isSaved = sms.SaveChanges();
                    if (isSaved > 0)
                    {
                        response.Message = "Successfully Saved";
                        response.StatusCode = HttpStatusCode.OK;
                    }
                    else
                    {
                        response.StatusCode = HttpStatusCode.BadRequest;
                    }
                }
                else
                {
                    response.Message = "Not Updated";
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



     //------------------------------------------------          DELETE STUDENT         -----------------------------------------



        [Route("delete_student/{id}")]
        [HttpDelete]
        public ApiResponse delstudent(int Student_ID)
        {
            ApiResponse response = new ApiResponse();
            {
                try
                {
                    var data = sms.Student_tbl.FirstOrDefault(a => a.IsActive == true && a.IsDeleted == false && a.ID == Student_ID);
                    if (data != null)
                    {
                        data.IsActive = false;
                        data.IsDeleted = true;

                        sms.Student_tbl.Update(data);
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
    }
}
