using Intellect.Core.Models.Authors;
using Intellect.Infrastructure.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Infrastructure.Repositories.AuthorRepositoies
{
    public class AuthorRepository : Repository<Author>, IAuthorRepository
    {
        public AuthorRepository(IntellectDbContext context)
            :base (context)
        {

        }
    }
}
