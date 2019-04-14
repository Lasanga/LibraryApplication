using Intellect.Core.Models.Authors;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.Authors
{
    public interface IAuthorManager
    {
        Task InsertAsync(Author author);
        Task<Author> UpdateAsync(Author author);
        Task DeleteAsync(int id);
        Task<Author> GetAsync(int id);
        Task<List<Author>> GetAllAsync();
    }
}
