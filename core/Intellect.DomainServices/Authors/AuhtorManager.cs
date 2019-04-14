using Intellect.Core.Models.Authors;
using Intellect.Infrastructure.Repositories.AuthorRepositoies;
using Intellect.Infrastructure.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.Authors
{
    public class AuhtorManager : IAuthorManager
    {
        private readonly IAuthorRepository _authorRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AuhtorManager(IAuthorRepository authorRepository, IUnitOfWork unitOfWork)
        {
            _authorRepository = authorRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task DeleteAsync(int id)
        {
            var result = await _unitOfWork.Authors.GetAllAsync();
            if (result != null)
            {
                var filter = result.Where(x => x.Id == id).FirstOrDefault();

                if (filter != null)
                {
                    filter.IsDeleted = true;
                    filter.DeletedTime = DateTime.Now;

                    _unitOfWork.Authors.DeleteAsync(filter);
                }    
            }
        }

        public async Task<List<Author>> GetAllAsync()
        {
            var result = await _unitOfWork.Authors.GetAllAsync();
            return result.ToList();
        }

        public async Task<Author> GetAsync(int id)
        {
            var result = await _unitOfWork.Authors.GetAsync(id);
            return result;
        }

        public async Task InsertAsync(Author author)
        {
            author.CreationTime = DateTime.Now;
            await _unitOfWork.Authors.InsertAsync(author);
        }

        public async Task<Author> UpdateAsync(Author author)
        {
            author.LastModificationDate = DateTime.Now;
            var result = await _unitOfWork.Authors.UpdateAsync(author);
            return result;
        }
    }
}
