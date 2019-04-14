using Intellect.Infrastructure.EntityFramework;
using Intellect.Infrastructure.Repositories.AuthorRepositoies;
using Intellect.Infrastructure.Repositories.BookReposiotries;
using Intellect.Infrastructure.Repositories.CategoryRepositories;
using Intellect.Infrastructure.Repositories.GovtRepositoires;
using Intellect.Infrastructure.Repositories.NewspaperRepositories;
using Intellect.Infrastructure.Repositories.OlaleafRepositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Infrastructure.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IAuthorRepository Authors { get; } 
        ICategoryRepository Categories { get; } 
        IBookRepository Books { get; } 
        INewspaperRepository Newspapers { get; } 
        IOlaleafRepository Olaleaves { get; } 
        IGovtRepository Govts { get; }

        int Complete();
    }
}
