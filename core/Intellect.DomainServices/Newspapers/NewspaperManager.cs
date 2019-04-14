using Intellect.Core.Models.Newspapers;
using Intellect.Infrastructure.Repositories.NewspaperRepositories;
using Intellect.Infrastructure.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.Newspapers
{
    public class NewspaperManager : INewspaperManager
    {
        private readonly INewspaperRepository _newspaperRepository;
        private readonly IUnitOfWork _unitOfWork;

        public NewspaperManager(INewspaperRepository newspaperRepository, IUnitOfWork unitOfWork)
        {
            _newspaperRepository = newspaperRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task DeleteAsync(int id)
        {
            var result = await _unitOfWork.Newspapers.GetAllAsync();
            if (result != null)
            {
                var filter = result.Where(x => x.Id == id).FirstOrDefault();

                if (filter != null)
                {
                    filter.IsDeleted = true;
                    filter.DeletedTime = DateTime.Now;

                    _unitOfWork.Newspapers.DeleteAsync(filter);
                }
            }
        }

        public async Task<List<NewsPaper>> GetAllAsync()
        {
            var result = await _unitOfWork.Newspapers.GetAllAsync();
            return result.ToList();
        }

        public async Task<NewsPaper> GetAsync(int id)
        {
            var result = await _unitOfWork.Newspapers.GetAsync(id);
            return result;
        }

        public async Task InsertAsync(NewsPaper NewsPaper)
        {
            NewsPaper.CreationTime = DateTime.Now;
            await _unitOfWork.Newspapers.InsertAsync(NewsPaper);
        }

        public async Task<NewsPaper> UpdateAsync(NewsPaper NewsPaper)
        {
            NewsPaper.LastModificationDate = DateTime.Now;
            var result = await _unitOfWork.Newspapers.UpdateAsync(NewsPaper);
            return result;
        }
    }
}
