﻿using AutoMapper;
using Intellect.Core;
using Intellect.Core.Models.Books;
using Intellect.Core.Models.Books.Dtos;
using Intellect.Core.Permissions;
using Intellect.DomainServices.Books;
using Intellect.Infrastructure.Repositories.AuthorRepositoies;
using Intellect.Infrastructure.Repositories.CategoryRepositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Intellect.WebApi.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IBookManager _bookManager;
        private readonly IMapper _mapper;

        public BooksController(IBookManager bookManager, IMapper mapper)
        {
            _bookManager = bookManager;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("GetAll")]
        [AllowAnonymous]
        public async Task<List<BookOutputDto>> GetAll()
        {
            List<BookOutputDto> books = new List<BookOutputDto>();

            var result = await _bookManager.GetAllAsync();

            foreach (var item in result)
            {
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                books.Add(new BookOutputDto()
                {
                    DisplayName = item.DisplayName,
                    IsbnNumber = item.IsbnNumber,
                    Price = item.Price,
                    Publisher = item.Publisher,
                    SourceType = item.SourceType,
                    TotalPages = item.TotalPages,
                    Year = item.Year,
                    Id = item.Id,
                    Author = new Core.Models.Authors.Dtos.AuthorOutputDto
                    {
                        Age = item.Author.Age,
                        DisplayName = item.Author.DisplayName,
                        EmailAddress = item.Author.EmailAddress,
                        Id = item.Id
                    },
                    Category = new Core.Models.Categories.Dtos.CategoryOutputDto
                    {
                        Id = item.Category.Id,
                        DisplayName = item.Category.DisplayName
                    }
                });
            }

            return books;

        }

        [HttpGet]
        [Route("GetRare")]
        [Authorize(Policy = PolicyTypes.BooksPolicy.rare)]
        public async Task<List<BookOutputDto>> GetRare()
        {
            List<BookOutputDto> books = new List<BookOutputDto>();

            var result = await _bookManager.GetAllRare();

            foreach (var item in result)
            {
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                books.Add(new BookOutputDto()
                {
                    DisplayName = item.DisplayName,
                    IsbnNumber = item.IsbnNumber,
                    Price = item.Price,
                    Publisher = item.Publisher,
                    SourceType = item.SourceType,
                    TotalPages = item.TotalPages,
                    Year = item.Year,
                    Id = item.Id,
                    Author = new Core.Models.Authors.Dtos.AuthorOutputDto
                    {
                        Age = item.Author.Age,
                        DisplayName = item.Author.DisplayName,
                        EmailAddress = item.Author.EmailAddress,
                        Id = item.Id
                    },
                    Category = new Core.Models.Categories.Dtos.CategoryOutputDto
                    {
                        Id = item.Category.Id,
                        DisplayName = item.Category.DisplayName
                    }
                });
            }

            return books;

        }

        [HttpGet]
        [Route("GetBookById")]
        [AllowAnonymous]
        public async Task<BookOutputDto> GetBookById(int id)
        {
            BookOutputDto book = new BookOutputDto();
            var result = _bookManager.GetAsync(id);

            book = _mapper.Map<BookOutputDto>(result);
            return book;
        }

        [HttpPost]
        [Route("CreateBook")]
        [Authorize(Policy = PolicyTypes.BooksPolicy.Cru)]
        public async Task CreateBook([FromBody] BookInputDto input)
        {
            var book = _mapper.Map<Book>(input);
            await _bookManager.InsertAsync(book);
        }

        [HttpPut]
        [Route("UpdateBook")]
        [Authorize(Policy = PolicyTypes.BooksPolicy.Cru)]
        public async Task<BookOutputDto> UpdateBook([FromBody] BookUpdateDto input)
        {
            var result = new Book();
            try
            {
                var book = _mapper.Map<Book>(input);
                result = await _bookManager.UpdateAsync(book);
            }
            catch (System.Exception ex)
            {

                throw;
            }

            return _mapper.Map<BookOutputDto>(result);
        }

        [HttpDelete]
        [Route("DeleteBook")]
        [Authorize(Policy = PolicyTypes.BooksPolicy.delete)]
        public void DeleteBook(int id)
        {
            _bookManager.DeleteAsync(id);
        }
    }
}