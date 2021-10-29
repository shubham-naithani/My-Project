using SchoolManagementSystem.DAL.Tabels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Model.AdminModel
{
    public class TeacherModel
    {
        public int teacher_ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string DOB { get; set; }
        public string ContactNo { get; set; }
    }
}
