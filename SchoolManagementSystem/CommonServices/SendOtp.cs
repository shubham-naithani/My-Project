using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Twilio;
using Twilio.Rest.Api.V2010.Account;

namespace SchoolManagementSystem.CommonServices
{
    public class SendOtp
    {
        private readonly IConfiguration _config;
        public SendOtp(IConfiguration config)
        {
            _config = config;
        }
        public string GenerateOTP()
        {
            Random rnd = new Random();
            int OTP = rnd.Next(1000, 9999);
            return OTP.ToString();
        }
        public async Task<bool> SendOTP(string Number, string OTP)
        {
            try
            {
                Number = "+91" + Number;
                string accountSid = _config.GetSection("Twilio:account_sid").Value;
                string authToken = _config.GetSection("Twilio:auth_token").Value;
                //System.Net.ServicePointManager.SecurityProtocol =
                TwilioClient.Init(accountSid, authToken);

                var message = MessageResource.Create(
                    body: "Your otp is: " + OTP + " and this is valid upto 10mins",
                    from: new Twilio.Types.PhoneNumber(_config.GetSection("Twilio:twilio_number").Value),
                    to: new Twilio.Types.PhoneNumber(Number)
                );
                if (message != null)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
