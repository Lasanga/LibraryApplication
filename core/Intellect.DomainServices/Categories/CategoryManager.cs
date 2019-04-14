using Intellect.Core.Models.Categories;
using Intellect.Infrastructure.Repositories;
using Intellect.Infrastructure.Repositories.CategoryRepositories;
using Intellect.Infrastructure.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.Categories
{
    public class CategoryManager : ICategoryManager
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IUnitOfWork _unitOfWork;

        public CategoryManager(ICategoryRepository categoryRepository, IUnitOfWork unitOfWork)
        {
            _categoryRepository = categoryRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task DeleteAsync(int id)
        {
            var result = await _unitOfWork.Categories.GetAllAsync();

            if (result != null)
            {
                var filter = result.Where(x => x.Id == id).FirstOrDefault();

                if (filter != null)
                {
                    filter.IsDeleted = true;
                    filter.DeletedTime = DateTime.Now;

                    _unitOfWork.Categories.DeleteAsync(filter);
                }

            }
        }

        public async Task<List<Category>> GetAllAsync()
        {
            var result = await _unitOfWork.Categories.GetAllAsync();
            return result.ToList();
        }

        public async Task<Category> GetAsync(int id)
        {
            var result = await _unitOfWork.Categories.GetAsync(id);
            return result;
        }

        public async Task InsertAsync(Category Category)
        {
            Category.CreationTime = DateTime.Now;
            await _unitOfWork.Categories.InsertAsync(Category);
        }

        public async Task<Category> UpdateAsync(Category Category)
        {
            Category.LastModificationDate = DateTime.Now;
            var result = await _unitOfWork.Categories.UpdateAsync(Category);
            return result;
        }
    }
}
