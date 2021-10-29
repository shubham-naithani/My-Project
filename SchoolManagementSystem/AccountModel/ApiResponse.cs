using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Model
{
    public class ApiResponse
    {
        public string Message { get; set; }
        public HttpStatusCode StatusCode { get; set; }
        public dynamic ResponseData { get; set; }
        public string token { get; set; }
    }
}
