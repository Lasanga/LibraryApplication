using IdentityModel;
using Intellect.Core;
using Intellect.Core.Models.Authorization;
using Intellect.Infrastructure.EntityFramework;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.Infrastructure.SeedDatabase
{
    public static class SeedDb
    {
        public static async Task Seed(IntellectDbContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            context.Database.EnsureCreated();

            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole { Name = StaticRoleNames.Admin },
                new IdentityRole { Name = StaticRoleNames.LocalUser },
                new IdentityRole { Name = StaticRoleNames.Librarian },
                new IdentityRole { Name = StaticRoleNames.ForeignUser },
                new IdentityRole { Name = StaticRoleNames.PrincipleLibrarian }
            };

            foreach (var role in roles)
            {
                var result = await roleManager.FindByNameAsync(role.Name);
                if (result == null)
                {
                    await roleManager.CreateAsync(new IdentityRole()
                    {
                        Name = role.Name
                    });
                }
            }

            #region SeedUsers

            var adminUsers = await userManager.GetUsersInRoleAsync(StaticRoleNames.Admin);
            if (adminUsers.Count == 0)
            {
                var user = new ApplicationUser()
                {
                    Email = "admin@intellect.com",
                    UserName = "admin",
                    IsActive = true
                };

                var result = await userManager.CreateAsync(user, "123qwe");

                result = userManager.AddClaimsAsync(user, new Claim[]{
                        new Claim(JwtClaimTypes.Name, "Admin admin"),
                        new Claim(JwtClaimTypes.GivenName, "Admin"),
                        new Claim(JwtClaimTypes.FamilyName, "admin"),
                        new Claim(JwtClaimTypes.Email, "admin@intellect.com"),
                }).Result;

                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, "123qwe");
                    await userManager.AddToRoleAsync(user, StaticRoleNames.Admin);
                }
            }

            var principleLibrarians = await userManager.GetUsersInRoleAsync(StaticRoleNames.PrincipleLibrarian);
            if (principleLibrarians.Count == 0)
            {
                var user = new ApplicationUser()
                {
                    Email = "principleLibrarian@intellect.com",
                    UserName = "headLibrarian",
                    IsActive = true
                };

                var result = await userManager.CreateAsync(user, "123qwe");

                result = userManager.AddClaimsAsync(user, new Claim[]{
                        new Claim(JwtClaimTypes.Name, "Principal librarian"),
                        new Claim(JwtClaimTypes.GivenName, "Principal"),
                        new Claim(JwtClaimTypes.FamilyName, "librarian"),
                        new Claim(JwtClaimTypes.Email, "principleLibrarian@intellect.com"),
                }).Result;

                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, "123qwe");
                    await userManager.AddToRoleAsync(user, StaticRoleNames.PrincipleLibrarian);
                }
            }

            #endregion

        }
    }
}
