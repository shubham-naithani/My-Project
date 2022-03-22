using SchoolManagementSystem.DAL.Tabels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagementSystem.Interfaces
{
   public interface ITokenService
    {
        string CreateToken(RegisterationTable reg);
    }
}
