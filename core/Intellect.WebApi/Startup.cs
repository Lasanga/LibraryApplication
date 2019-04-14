using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Intellect.Core.Models.Authorization;
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
                options.User.RequireUniqueEmail = false;
            });

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOriginsHeadersAndMethods",
                    builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            });

            services.AddSwaggerDocument();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            app.UseStaticFiles();
            app.UseCors("AllowAllOriginsHeadersAndMethods");
            app.UseSwagger();
            app.UseSwaggerUi3();
            app.UseMvc();

            Seed(app);
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
    }
}
