using Intellect.Core.Models.OlaLeafs;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.OlaLeafs
{
    public interface IOlaleafManager
    {
        Task InsertAsync(OlaLeaf OlaLeaf);
        Task<OlaLeaf> UpdateAsync(OlaLeaf OlaLeaf);
        Task DeleteAsync(int id);
        Task<OlaLeaf> GetAsync(int id);
        Task<List<OlaLeaf>> GetAllAsync();
    }
}
