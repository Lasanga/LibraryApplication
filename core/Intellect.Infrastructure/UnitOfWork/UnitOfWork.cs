using System;
using System.Collections.Generic;
using System.Text;
using Intellect.Infrastructure.EntityFramework;
using Intellect.Infrastructure.Repositories.AuthorRepositoies;
using Intellect.Infrastructure.Repositories.BookReposiotries;
using Intellect.Infrastructure.Repositories.CategoryRepositories;
using Intellect.Infrastructure.Repositories.GovtRepositoires;
using Intellect.Infrastructure.Repositories.NewspaperRepositories;
using Intellect.Infrastructure.Repositories.OlaleafRepositories;

namespace Intellect.Infrastructure.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IntellectDbContext _dbContext;

        public UnitOfWork(IntellectDbContext dbContext)
        {
            _dbContext = dbContext;
            Authors = new AuthorRepository(_dbContext);
            Categories = new CategoryRepository(_dbContext);
            Books = new BookRepository(_dbContext);
            Newspapers = new NewspaperRepository(_dbContext);
            Govts = new GovtRepository(_dbContext);
            Olaleaves = new OlaleafRepository(_dbContext);
        }

        public IAuthorRepository Authors { get; private set; }

        public ICategoryRepository Categories { get; private set; }

        public IBookRepository Books { get; private set; }

        public INewspaperRepository Newspapers { get; private set; }

        public IOlaleafRepository Olaleaves { get; private set; }

        public IGovtRepository Govts { get; private set; }

        public int Complete()
        {
            return _dbContext.SaveChanges();
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }
    }
}
