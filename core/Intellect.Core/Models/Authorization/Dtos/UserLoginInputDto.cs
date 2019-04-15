using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Models.Authorization.Dtos
{
    public class UserLoginInputDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
