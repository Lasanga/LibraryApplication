using IdentityModel;
using IdentityServer4.Models;
using IdentityServer4.Validation;
using Intellect.Core.Models.Authorization;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.Authorization
{
    public class ResourceOwnerPasswordValidator : IResourceOwnerPasswordValidator
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public ResourceOwnerPasswordValidator(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public Task ValidateAsync(ResourceOwnerPasswordValidationContext context)
        {
            var user =  _userManager.FindByNameAsync(context.UserName);
            var isAuth = _userManager.CheckPasswordAsync(user.Result, context.Password);

            if (user != null && user.Result.IsActive && isAuth.Result)
            {
                context.Result = new GrantValidationResult(user.Result.Id, "password", null, "local", null);
                return Task.FromResult(context.Result);
            }

            context.Result = new GrantValidationResult(TokenRequestErrors.InvalidGrant, "The username and password do not match", null);
            return Task.FromResult(context.Result);
        }
    }
}
