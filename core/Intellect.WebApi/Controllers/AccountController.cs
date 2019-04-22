using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using IdentityModel;
using Intellect.Core;
using Intellect.Core.Models.Authorization;
using Intellect.Core.Models.Authorization.Dtos;
using Intellect.Core.Permissions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Intellect.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration _configuration;

        public AccountController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("Register")]
        [AllowAnonymous]
        public async Task Register([FromBody]UserRegisterInputDto input)
        {
            if (input.NationalId.Length != 10)
            {
                throw new Exception("NationalId should be a legal 10 digit value");
            }
            var result = new IdentityResult();

            var user = new ApplicationUser { UserName = input.UserName, Email = input.EmailAddress, NationalId = input.NationalId };

            if (!string.IsNullOrEmpty(user.NationalId))
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

        [HttpGet]
        [Route("GetForiegners")]
        [Authorize(Policy = PolicyTypes.UserPolicy.Manage)]
        public async Task<List<UnRegUserOutputDto>> GetForiegners()
        {
            var users = _userManager.Users.ToList().Where(x => !x.IsActive);

            return users?.Select(x => new UnRegUserOutputDto()
            {
                Email = x.Email,
                Id = x.Id,
                IsActive = x.IsActive,
                UserName = x.UserName
            }).ToList();

        }

        [HttpPut]
        [Route("AddForiegner")]
        [Authorize(Policy = PolicyTypes.UserPolicy.Manage)]
        public async Task AddForiegner([FromBody]AddForiegnerInputDto input)
        {
            var user = await _userManager.FindByIdAsync(input.Id);

            if (user != null && !user.IsActive)
            {
                user.IsActive = true;
                await _userManager.UpdateAsync(user);
            }

        }
    }
}