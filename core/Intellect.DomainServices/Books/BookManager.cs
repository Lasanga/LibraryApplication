using Intellect.Core.Models.Books;
using Intellect.Infrastructure.Repositories.BookReposiotries;
using Intellect.Infrastructure.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.DomainServices.Books
{
    public class BookManager : IBookManager
    {
        private readonly IBookRepository _bookRepository;
        private readonly IUnitOfWork _unitOfWork;

        public BookManager(IBookRepository bookRepository, IUnitOfWork unitOfWork)
        {
            _bookRepository = bookRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task DeleteAsync(int id)
        {
            var result = await _unitOfWork.Books.GetAllAsync();

            if (result != null)
            {
                var filter = result.Where(x => x.Id == id).FirstOrDefault();

                if (filter != null)
                {
                    filter.IsDeleted = true;
                    filter.DeletedTime = DateTime.Now;

                    _unitOfWork.Books.DeleteAsync(filter);
                }

            }
        }

        public async Task<List<Book>> GetAllAsync()
        {
            var result = _unitOfWork.Books.GetAllIncluding(x => x.Author, x => x.Category).ToList();
            result = result.Where(x => x.SourceType == Core.Models.Helpers.SourceType.available).ToList();

            return result.ToList();
        }

        public async Task<List<Book>> GetAllRare()
        {
            var result = _unitOfWork.Books.GetAllIncluding(x => x.Author, x => x.Category).ToList();
            return result.Where(x => x.SourceType == Core.Models.Helpers.SourceType.rare).ToList();
        }

        public Book GetAsync(int id)
        {
            var result =  _unitOfWork.Books.GetAllIncluding(x => x.Author, x => x.Category).Where(x => x.Id == id).FirstOrDefault();
            return result;
        }

        public async Task InsertAsync(Book book)
        {
            book.CreationTime = DateTime.Now;
            await _unitOfWork.Books.InsertAsync(book);
        }

        public async Task<Book> UpdateAsync(Book book)
        {
            book.LastModificationDate = DateTime.Now;
            var result = await _unitOfWork.Books.UpdateAsync(book);
            return result;
        }
    }
}
