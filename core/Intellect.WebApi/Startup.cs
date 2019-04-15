using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using IdentityServer4.AspNetIdentity;
using IdentityServer4.Validation;
using Intellect.Core.Configurations;
using Intellect.Core.Models.Authorization;
using Intellect.Core.Permissions;
using Intellect.DomainServices.Authorization;
using Intellect.DomainServices.Authors;
using Intellect.DomainServices.Books;
using Intellect.DomainServices.Categories;
using Intellect.DomainServices.GovtPublications;
using Intellect.DomainServices.Newspapers;
using Intellect.DomainServices.OlaLeafs;
using Intellect.Infrastructure.EntityFramework;
using Intellect.Infrastructure.Repositories;
using Intellect.Infrastructure.Repositories.AuthorRepositoies;
using Intellect.Infrastructure.Repositories.BookReposiotries;
using Intellect.Infrastructure.Repositories.CategoryRepositories;
using Intellect.Infrastructure.Repositories.GovtRepositoires;
using Intellect.Infrastructure.Repositories.NewspaperRepositories;
using Intellect.Infrastructure.Repositories.OlaleafRepositories;
using Intellect.Infrastructure.SeedDatabase;
using Intellect.Infrastructure.UnitOfWork;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using NSwag;
using NSwag.AspNetCore;
using NSwag.SwaggerGeneration.Processors.Security;

namespace Intellect.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddAutoMapper();

            services.AddDbContext<IntellectDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Default")));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            AddScopes(services);

            services.AddIdentity<ApplicationUser, IdentityRole>()
               .AddEntityFrameworkStores<IntellectDbContext>()
               .AddDefaultTokenProviders();

            var builder1 = services.AddIdentityServer(options =>
            {
                options.IssuerUri = null;
            }).AddDeveloperSigningCredential()
              .AddInMemoryIdentityResources(Config.GetIdentityResources())
              .AddInMemoryClients(Config.GetClients())
              .AddInMemoryApiResources(Config.GetApis())
              .AddAspNetIdentity<ApplicationUser>();

            builder1.Services.AddTransient<IResourceOwnerPasswordValidator, ResourceOwnerPasswordValidator>();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(options =>
            {
                options.Authority = "http://localhost:5000";
                options.RequireHttpsMetadata = false;

                options.Audience = "api1";
            });

            services.Configure<IdentityOptions>(options =>
            {
                // Password settings.
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 5;
                options.Password.RequiredUniqueChars = 0;

                // Lockout settings.
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.AllowedForNewUsers = true;

                // User settings.
                options.User.AllowedUserNameCharacters =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
                options.User.RequireUniqueEmail = true;
            });

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOriginsHeadersAndMethods",
                    builder => builder.WithOrigins("http://localhost:4200"));
            });

            AddPolicies(services);
            services.AddSwagger();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseIdentityServer();
            app.UseStaticFiles();
            app.UseCors(b => b.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:4200"));
            UseNswag(app);
            app.UseMvc();

            Seed(app);
        }

        private void AddPolicies(IServiceCollection services)
        {
            services.AddAuthorization(options =>
            {
                options.AddPolicy(PolicyTypes.AuthorPolicy.Crud, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.AuthorPermission.Add,
                        AppPermissions.AuthorPermission.Delete,
                        AppPermissions.AuthorPermission.Edit,
                        AppPermissions.AuthorPermission.View);
                });

                options.AddPolicy(PolicyTypes.CategoryPolicy.Crud, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.CategoryPermission.Add,
                        AppPermissions.CategoryPermission.Delete,
                        AppPermissions.CategoryPermission.Edit,
                        AppPermissions.CategoryPermission.View);
                });

                #region Books
                options.AddPolicy(PolicyTypes.BooksPolicy.Cru, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.BooksPermission.Add,
                        AppPermissions.BooksPermission.Edit,
                        AppPermissions.BooksPermission.View);
                });

                options.AddPolicy(PolicyTypes.BooksPolicy.delete, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.BooksPermission.Delete);
                });

                options.AddPolicy(PolicyTypes.BooksPolicy.View, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.AuthorPermission.View);
                });
                #endregion

                #region Newspaper
                options.AddPolicy(PolicyTypes.NewspaperPolicy.Cru, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.NewspaperPermission.Add,
                        AppPermissions.NewspaperPermission.Edit,
                        AppPermissions.NewspaperPermission.View);
                });

                options.AddPolicy(PolicyTypes.NewspaperPolicy.delete, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.NewspaperPermission.Delete);
                });

                options.AddPolicy(PolicyTypes.NewspaperPolicy.View, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.NewspaperPermission.View);
                });
                #endregion

                #region OlaLeaf
                options.AddPolicy(PolicyTypes.OlaLeafPolicy.Cru, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.OlaLeafPermission.Add,
                        AppPermissions.OlaLeafPermission.Edit,
                        AppPermissions.OlaLeafPermission.View);
                });

                options.AddPolicy(PolicyTypes.OlaLeafPolicy.delete, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.OlaLeafPermission.Delete);
                });

                options.AddPolicy(PolicyTypes.OlaLeafPolicy.View, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.OlaLeafPermission.View);
                });
                #endregion

                #region Govt
                options.AddPolicy(PolicyTypes.GovtPolicy.Cru, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.GovtPermission.Add,
                        AppPermissions.GovtPermission.Edit,
                        AppPermissions.GovtPermission.View);
                });

                options.AddPolicy(PolicyTypes.GovtPolicy.delete, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.GovtPermission.Delete);
                });

                options.AddPolicy(PolicyTypes.GovtPolicy.View, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.GovtPermission.View);
                });
                #endregion

                options.AddPolicy(PolicyTypes.UserPolicy.Manage, policy =>
                {
                    policy.RequireClaim(
                        CustomClaims.Permission,
                        AppPermissions.UserPermission.AddUser
                        );
                });
            });
        }



        private void AddScopes(IServiceCollection services)
        {
            //Repository scope
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<IAuthorRepository, AuthorRepository>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IBookRepository, BookRepository>();
            services.AddScoped<INewspaperRepository, NewspaperRepository>();
            services.AddScoped<IOlaleafRepository, OlaleafRepository>();
            services.AddScoped<IGovtRepository, GovtRepository>();

            //Managers scope
            services.AddTransient<ICategoryManager, CategoryManager>();
            services.AddTransient<IBookManager, BookManager>();
            services.AddTransient<IAuthorManager, AuhtorManager>();
            services.AddTransient<IGovtPublicationManager, GovtPublicationManager>();
            services.AddTransient<INewspaperManager, NewspaperManager>();
            services.AddTransient<IOlaleafManager, OlaleafManager>();
        }

        private void Seed(IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetService<IntellectDbContext>();
                var userManager = scope.ServiceProvider.GetService<UserManager<ApplicationUser>>();
                var roleManager = scope.ServiceProvider.GetService<RoleManager<IdentityRole>>();
                context.Database.Migrate();
                SeedDb.Seed(context, userManager, roleManager).Wait();
            }
        }

        private void UseNswag(IApplicationBuilder app)
        {
#pragma warning disable CS0618 // Type or member is obsolete
            app.UseSwaggerUi3(typeof(Startup).GetTypeInfo().Assembly, settings =>
            {
                settings.GeneratorSettings.OperationProcessors.Add(new OperationSecurityScopeProcessor("JWT Token"));

                settings.GeneratorSettings.DocumentProcessors.Add(new SecurityDefinitionAppender("JWT Token",
                    new SwaggerSecurityScheme
                    {
                        Type = SwaggerSecuritySchemeType.ApiKey,
                        Name = "Authorization",
                        Description = "Copy 'Bearer ' + valid JWT token into field",
                        In = SwaggerSecurityApiKeyLocation.Header
                    }));
            });
#pragma warning restore CS0618 // Type or member is obsolete
        }
    }
}
