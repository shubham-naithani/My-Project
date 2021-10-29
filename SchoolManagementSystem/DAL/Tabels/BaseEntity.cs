using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.DAL.Tabels
{
    public class BaseEntity
    {
        [Required]
        public bool IsActive { get; set; } = true;
        [Required]
        public bool IsDeleted { get; set; } = false;
        [Required]
        public string CreatedBy { get; set; }
        [Required]
        public DateTime? Created_DateTime { get; set; } = DateTime.UtcNow;
        public string ModifiedBy { get; set; } = "";
        public DateTime? Modified_DateTime { get; set; } = DateTime.UtcNow;
        public string DeletedBy { get; set; }
        public DateTime? Deleted_DateTime { get; set; }
    }
}
