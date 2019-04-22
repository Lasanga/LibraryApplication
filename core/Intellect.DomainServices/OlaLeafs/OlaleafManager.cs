using Intellect.Core.Models.OlaLeafs;
using Intellect.Infrastructure.EntityFramework;
using Intellect.Infrastructure.Repositories.OlaleafRepositories;
using Intellect.Infrastructure.UnitOfWork;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.OlaLeafs
{
    public class OlaleafManager : IOlaleafManager
    {
        private readonly IOlaleafRepository _olaleafRepository;
        private readonly IUnitOfWork _unitOfWork;

        public OlaleafManager(IOlaleafRepository olaleafRepository, IUnitOfWork unitOfWork)
        {
            _olaleafRepository = olaleafRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task DeleteAsync(int id)
        {
            var result = await _unitOfWork.Olaleaves.GetAllAsync();
            var filter = result.Where(x => x.Id == id).FirstOrDefault();

            filter.IsDeleted = true;
            filter.DeletedTime = DateTime.Now;

            if (result != null)
            {
                _unitOfWork.Olaleaves.DeleteAsync(filter);
            }
        }

        public async Task<List<OlaLeaf>> GetAllAsync()
        {
            var result =  _unitOfWork.Olaleaves.GetAllIncluding(x => x.Author, x => x.Category).ToList();
            result = result.Where(x => x.SourceType == Core.Models.Helpers.SourceType.available).ToList();

            return result.ToList();
        }

        public async Task<List<OlaLeaf>> GetAllRare()
        {
            var result = _unitOfWork.Olaleaves.GetAllIncluding(x => x.Author, x => x.Category).ToList();
            result = result.Where(x => x.SourceType == Core.Models.Helpers.SourceType.rare).ToList();
            return result.ToList();
        }

        public async Task<OlaLeaf> GetAsync(int id)
        {
            var result = _unitOfWork.Olaleaves.GetAllIncluding(x => x.Author, x => x.Category).Where(x => x.Id == id).FirstOrDefault();
            return result;
        }

        public async Task InsertAsync(OlaLeaf OlaLeaf)
        {
            OlaLeaf.CreationTime = DateTime.Now;
            await _unitOfWork.Olaleaves.InsertAsync(OlaLeaf);
        }

        public async Task<OlaLeaf> UpdateAsync(OlaLeaf OlaLeaf)
        {
            OlaLeaf.LastModificationDate = DateTime.Now;
            var result = await _unitOfWork.Olaleaves.UpdateAsync(OlaLeaf);
            return result;
        }
    }
}
