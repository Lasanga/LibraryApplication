using Intellect.Core.Models.Authorization;
using Intellect.Core.Models.Authors;
using Intellect.Core.Models.Books;
using Intellect.Core.Models.Categories;
using Intellect.Core.Models.GovtPublications;
using Intellect.Core.Models.Newspapers;
using Intellect.Core.Models.OlaLeafs;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Intellect.Infrastructure.EntityFramework
{
    public class IntellectDbContext : IdentityDbContext<ApplicationUser>
    {

        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<Author> Authors { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<GovtPublication> GovtPublications { get; set; }
        public virtual DbSet<OlaLeaf> OlaLeaves { get; set; }
        public virtual DbSet<NewsPaper> NewsPapers { get; set; }

        public IntellectDbContext(DbContextOptions<IntellectDbContext> options)
           : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Author>().HasQueryFilter(p => !p.IsDeleted);
            builder.Entity<Category>().HasQueryFilter(p => !p.IsDeleted);
            builder.Entity<Book>().HasQueryFilter(p => !p.IsDeleted);
            builder.Entity<NewsPaper>().HasQueryFilter(p => !p.IsDeleted);
            builder.Entity<GovtPublication>().HasQueryFilter(p => !p.IsDeleted);
            builder.Entity<OlaLeaf>().HasQueryFilter(p => !p.IsDeleted);
        }
    }
}
