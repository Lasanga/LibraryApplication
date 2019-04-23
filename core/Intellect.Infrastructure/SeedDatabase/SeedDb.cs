using IdentityModel;
using Intellect.Core;
using Intellect.Core.Models.Authorization;
using Intellect.Core.Permissions;
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

                    var foundRole = await roleManager.FindByNameAsync(role.Name);

                    switch (foundRole.Name)
                    {
                        #region Admin
                        case StaticRoleNames.Admin:
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.AuthorPermission.Add   ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.AuthorPermission.Delete));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.AuthorPermission.Edit  ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.AuthorPermission.View  ));

                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.CategoryPermission.Add   ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.CategoryPermission.Delete));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.CategoryPermission.Edit  ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.CategoryPermission.View));

                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.Add   ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.Delete));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.Edit  ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.Rare));

                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.Add   ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.Delete));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.Edit  ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.Rare));

                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.OlaLeafPermission.Add   ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.OlaLeafPermission.Delete));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.OlaLeafPermission.Edit  ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.OlaLeafPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.OlaLeafPermission.Rare));

                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.Add   ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.Delete));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.Edit  ));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.Rare));

                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.UserPermission.AddUser));
                            break;
                        #endregion

                        #region Librarian
                        case StaticRoleNames.Librarian:

                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.Add));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.Edit));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.Rare));

                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.Add));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.Edit));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.Rare));

                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.OlaLeafPermission.Add));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.OlaLeafPermission.Edit));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.OlaLeafPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.OlaLeafPermission.Rare));

                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.Add));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.Edit));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.Rare));
                            break;
                        #endregion

                        #region LocalUser
                        case StaticRoleNames.LocalUser:

                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.OlaLeafPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.OlaLeafPermission.Rare));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.Rare));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.Rare));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.Rare));
                            break;
                        #endregion

                        #region ForeignUser
                        case StaticRoleNames.ForeignUser:
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.BooksPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.NewspaperPermission.View));
                            await roleManager.AddClaimAsync(foundRole, new Claim(CustomClaims.Permission, AppPermissions.GovtPermission.View));
                            break;
                        #endregion

                        default:
                            break;
                    }
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
                        new Claim(JwtClaimTypes.Email, "admin@intellect.com"),
                }).Result;

                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, "123qwe");
                    await userManager.AddToRoleAsync(user, StaticRoleNames.Admin);
                }
            }


            var librarian = await userManager.GetUsersInRoleAsync(StaticRoleNames.Librarian);
            if (librarian.Count == 0)
            {
                var user = new ApplicationUser()
                {
                    Email = "librarian@intellect.com",
                    UserName = "librarian",
                    IsActive = true
                };

                var result = await userManager.CreateAsync(user, "123qwe");

                result = userManager.AddClaimsAsync(user, new Claim[]{
                        new Claim(JwtClaimTypes.Name, "Librarian"),
                        new Claim(JwtClaimTypes.Email, "principleLibrarian@intellect.com"),
                }).Result;

                if (result.Succeeded)
                {
                    await userManager.AddPasswordAsync(user, "123qwe");
                    await userManager.AddToRoleAsync(user, StaticRoleNames.Librarian);
                }
            }

            #endregion

        }
    }
}
