using IdentityServer4;
using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Configurations
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };
        }

        public static IEnumerable<ApiResource> GetApis()
        {
            return new List<ApiResource>
            {
                new ApiResource("api1", "My API", claimTypes: new[] { "name", "role", "permission"})
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "console",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,

                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes = { "api1", "role" }
                },

                // JavaScript Client (Angular)
                new Client
                {
                    ClientId = "js",
                    ClientName = "JavaScript Client",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,
                    RequirePkce = true,
                    ClientSecrets = { new Secret("secret".Sha256()) },
                    AllowedCorsOrigins =     { "http://localhost:4200" },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "api1"
                    }
                }
            };
        }

        //public static List<TestUser> Get()
        //{
        //    var users = new List<TestUser>
        //    {
        //        new TestUser
        //        {
        //            SubjectId = "999999",
        //            Username = "lasanga",
        //            Password = "123qwe",
        //            Claims = new List<Claim> {
        //            new Claim(JwtClaimTypes.Email, "scott@scottbrady91.com"),
        //            new Claim(JwtClaimTypes.Role, "admin")
        //        }
        //        }
        //    };

        //    return users;
        //}
    }
}
