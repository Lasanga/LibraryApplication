using Intellect.Core.Models.GovtPublications;
using Intellect.Infrastructure.Repositories.GovtRepositoires;
using Intellect.Infrastructure.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.GovtPublications
{
    public class GovtPublicationManager : IGovtPublicationManager
    {
        private readonly IGovtRepository _govtRepository;
        private readonly IUnitOfWork _unitOfWork;

        public GovtPublicationManager(IGovtRepository govtRepository, IUnitOfWork unitOfWork)
        {
            _govtRepository = govtRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task DeleteAsync(int id)
        {
            var result = await _unitOfWork.Govts.GetAllAsync();

            if (result != null)
            {
                var filter = result.Where(x => x.Id == id).FirstOrDefault();

                if (filter != null)
                {
                    filter.IsDeleted = true;
                    filter.DeletedTime = DateTime.Now;

                    _unitOfWork.Govts.DeleteAsync(filter);
                }

            }
        }

        public async Task<List<GovtPublication>> GetAllAsync()
        {
            var result = await _unitOfWork.Govts.GetAllAsync();
            return result.ToList();
        }

        public async Task<GovtPublication> GetAsync(int id)
        {
            var result = await _unitOfWork.Govts.GetAsync(id);
            return result;
        }

        public async Task InsertAsync(GovtPublication GovtPublication)
        {
            GovtPublication.CreationTime = DateTime.Now;
            await _unitOfWork.Govts.InsertAsync(GovtPublication);
        }

        public async Task<GovtPublication> UpdateAsync(GovtPublication GovtPublication)
        {
            GovtPublication.LastModificationDate = DateTime.Now;
            var result = await _unitOfWork.Govts.UpdateAsync(GovtPublication);
            return result;
        }
    }
}
