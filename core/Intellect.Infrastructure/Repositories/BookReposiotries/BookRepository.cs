using Intellect.Core.Models.Books;
using Intellect.Infrastructure.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Infrastructure.Repositories.BookReposiotries
{
    public class BookRepository : Repository<Book>, IBookRepository
    {
        public BookRepository(IntellectDbContext context)
            :base(context)
        {

        }
    }
}
