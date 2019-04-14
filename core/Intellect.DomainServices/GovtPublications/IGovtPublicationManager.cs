using Intellect.Core.Models.GovtPublications;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.GovtPublications
{
    public interface IGovtPublicationManager
    {
        Task InsertAsync(GovtPublication GovtPublication);
        Task<GovtPublication> UpdateAsync(GovtPublication GovtPublication);
        Task DeleteAsync(int id);
        Task<GovtPublication> GetAsync(int id);
        Task<List<GovtPublication>> GetAllAsync();
    }
}
