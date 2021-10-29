using System;
using System.ComponentModel.DataAnnotations;

namespace SchoolManagementSystem.DAL.Tabels
{
    public class RegisterationTable:BaseEntity
    {
        [Key]
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public string DOB { get; set; }
        public string ContactNo { get; set; }
        public string Role { get; set; }
        public bool IsVerified { get; set; }
        public string otp { get; set; }
        public DateTime OtpGenerateDateTime { get; set; }
    }
}
