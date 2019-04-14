using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Intellect.Core;
using Intellect.Core.Models.Authorization;
using Intellect.Core.Models.Authorization.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Intellect.WebApi.Controllers
{
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public AccountController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        [Route("api/[controller]/Register")]
        public async Task Resgister(UserRegisterInputDto input)
        {
            var result = new IdentityResult();

            var user = new ApplicationUser { UserName = input.UserName, Email = input.EmailAddress, NationalId = input.NationalId };

            if (user.NationalId != null)
            {
                user.IsActive = true;
                result = await _userManager.CreateAsync(user, input.Password);

                await _userManager.AddToRoleAsync(user, StaticRoleNames.LocalUser);
                await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("role", StaticRoleNames.LocalUser));
            }
            else
            {
                user.IsActive = false;
                result = await _userManager.CreateAsync(user, input.Password);

                await _userManager.AddToRoleAsync(user, StaticRoleNames.ForeignUser);
                await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("role", StaticRoleNames.ForeignUser));
            }

            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("userName", user.UserName));
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("email", user.Email));
        }
    }
}