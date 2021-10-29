using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.DAL.Tabels
{
    public class StudentTable :BaseEntity
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string FathersName { get; set; }
        [Required]
        public string DOB { get; set; }
        [Required]
        public string ADDRESS { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string ContactNo { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string Cast { get; set; }
        [Required]
        public string Religion { get; set; }
        [Required]
        public string Nationality { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Pincode { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public string Class { get; set; }
    }
}
