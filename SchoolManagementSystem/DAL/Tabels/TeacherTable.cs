using System.ComponentModel.DataAnnotations;

namespace SchoolManagementSystem.DAL.Tabels
{
    public class TeacherTable :BaseEntity
    {
        //--------------------------------------- TEACHER JOINING FORM ------------------------------------------

        [Key]
        public int ID { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string DOB { get; set; }
        [Required]
        public string Age { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string ContactNo { get; set; }
        [Required]
        public string ADDRESS { get; set; }
        [Required]
        public string Cast { get; set; }
        [Required]
        public string Religion { get; set; }
        [Required]
        public string Nationality { get; set; }
        [Required]
        public string MaritialStatus { get; set; }
        [Required]
        public string Qualification { get; set; }
        [Required]
        public string SubjectsYouCanTeach { get; set; }
        [Required]
        public string ExperienceOfTeaching { get; set; }


        //---------------------------------------          FOR ADMIN USE ONLY         --------------------------------------------

   
        public string ClassesYouWillTeach { get; set; }
        public string YourPeriods { get; set; }
        public bool Approved { get; set; }
    }
}
