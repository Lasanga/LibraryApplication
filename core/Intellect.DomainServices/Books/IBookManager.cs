using Intellect.Core.Models.Books;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.Books
{
    public interface IBookManager
    {
        Task InsertAsync(Book book);
        Task<Book> UpdateAsync(Book book);
        Task DeleteAsync(int id);
        Book GetAsync(int id);
        Task<List<Book>> GetAllAsync();
        Task<List<Book>> GetAllRare();
    }
}
