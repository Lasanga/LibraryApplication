using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Models.Authorization.Dtos
{
    public class UserRegisterInputDto
    {
        public string UserName { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public string NationalId { get; set; }
    }
}
