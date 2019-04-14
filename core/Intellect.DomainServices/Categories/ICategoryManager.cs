using Intellect.Core.Models.Categories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.Categories
{
    public interface ICategoryManager
    {
        Task InsertAsync(Category Category);
        Task<Category> UpdateAsync(Category Category);
        Task DeleteAsync(int id);
        Task<Category> GetAsync(int id);
        Task<List<Category>> GetAllAsync();
    }
}
