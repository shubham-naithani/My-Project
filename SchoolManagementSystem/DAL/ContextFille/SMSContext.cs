using Microsoft.EntityFrameworkCore;
using SchoolManagementSystem.DAL.Tabels;

namespace SchoolManagementSystem.DAL.ContextFille
{
    public class SMSContext : DbContext
    {
        public SMSContext(DbContextOptions con) : base(con)
        {
        }
        public DbSet<RegisterationTable> Registeration_tbl { get; set; }
        public DbSet<StudentTable> Student_tbl { get; set; }
        public DbSet<TeacherTable> Teacher_tbl { get; set; }
    }
}
