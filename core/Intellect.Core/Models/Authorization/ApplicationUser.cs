using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.ComponentModel;

namespace Intellect.Core.Models.Authorization
{
    public class ApplicationUser : IdentityUser
    {
        public string NationalId { get; set; }

        [DefaultValue(false)]
        public bool IsActive { get; set; }
    }
}
