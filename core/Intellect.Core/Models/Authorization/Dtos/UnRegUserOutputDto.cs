using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Models.Authorization.Dtos
{
    public class UnRegUserOutputDto
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public bool IsActive { get; set; }
    }
}
