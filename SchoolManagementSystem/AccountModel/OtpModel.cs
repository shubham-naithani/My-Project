using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Model
{
    public class OtpModel
    {

        public string ContactNo { get; set; }
        public string OTP { get; set; }
        public string OTPGenerateDate {get;set;}

    }
}
