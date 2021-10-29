using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.AccountModel
{
    public class TeacherJoiningFormModel
    {
        //--------------------------------------- TEACHER JOINING FORM -----------------------------------------
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DOB { get; set; }
        public string Age { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string ContactNo { get; set; }
        public string ADDRESS { get; set; }
        public string Cast { get; set; }
        public string Religion { get; set; }
        public string Nationality { get; set; }
        public string MaritialStatus { get; set; }
        public string Qualification { get; set; }
        public string SubjectsYouCanTeach { get; set; }
        public string ExperienceOfTeaching { get; set; }


        //---------------------------------------          FOR ADMIN USE ONLY         --------------------------------------------

      
        public string ClassesYouWillTeach { get; set; }
        public string YourPeriods { get; set; }
        public bool Approved { get; set; }

    }
}
