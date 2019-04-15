﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Intellect.Core;
using Intellect.Core.Models.Authors;
using Intellect.Core.Models.Authors.Dtos;
using Intellect.DomainServices.Authors;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intellect.WebApi.Controllers
{
    [ApiController]
    [Authorize]
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorManager _authorManager;
        private readonly IMapper _mapper;

        public AuthorController(IAuthorManager authorManager, IMapper mapper)
        {
            _authorManager = authorManager;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("api/[controller]/GetAll")]
        public async Task<List<AuthorOutputDto>> GetAll()
        {
            List<AuthorOutputDto> authors = new List<AuthorOutputDto>();

            var result = await _authorManager.GetAllAsync();

            foreach (var item in result)
            {
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                authors.Add(new AuthorOutputDto()
                {
                    DisplayName = item.DisplayName,
                    Id = item.Id,
                    Age = item.Age,
                    EmailAddress = item.EmailAddress
                });
            }

            return authors;
        }

        [HttpGet()]
        [Route("api/[controller]/GetById")]
        public async Task<AuthorOutputDto> Get(int id)
        {
            AuthorOutputDto author = new AuthorOutputDto();
            var result = await _authorManager.GetAsync(id);

            author = _mapper.Map<AuthorOutputDto>(result);
            return author;
        }

        [HttpPost]
        [Route("api/[controller]/Create")]
        public async Task Post([FromBody] AuthorInputDto input)
        {
            var author = _mapper.Map<Author>(input);
            await _authorManager.InsertAsync(author);
        }

        [HttpPut()]
        [Route("api/[controller]/Update")]
        public async Task<AuthorOutputDto> Put([FromBody] AuthorUpdateDto input)
        {
            var book = _mapper.Map<Author>(input);
            var result = await _authorManager.UpdateAsync(book);

            return _mapper.Map<AuthorOutputDto>(result);
        }

        [HttpDelete()]
        [Route("api/[controller]/Delete")]
        public void Delete(int id)
        {
            _authorManager.DeleteAsync(id);
        }
    }
}