using Intellect.Core.Models.Newspapers;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.Newspapers
{
    public interface INewspaperManager
    {
        Task InsertAsync(NewsPaper NewsPaper);
        Task<NewsPaper> UpdateAsync(NewsPaper NewsPaper);
        Task DeleteAsync(int id);
        Task<NewsPaper> GetAsync(int id);
        Task<List<NewsPaper>> GetAllAsync();
    }
}
