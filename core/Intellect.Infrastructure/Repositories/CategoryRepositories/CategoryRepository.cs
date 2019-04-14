using Intellect.Core.Models.Categories;
using Intellect.Infrastructure.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Infrastructure.Repositories.CategoryRepositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(IntellectDbContext context)
            :base(context)
        {

        }
    }
}
