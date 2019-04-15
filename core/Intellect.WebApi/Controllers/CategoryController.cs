﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Intellect.Core;
using Intellect.Core.Models.Categories;
using Intellect.Core.Models.Categories.Dtos;
using Intellect.DomainServices.Categories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intellect.WebApi.Controllers
{
    [ApiController]
    [Authorize(Roles = StaticRoleNames.Admin)]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryManager _categoryManager;
        private readonly IMapper _mapper;

        public CategoryController(ICategoryManager categoryManager, IMapper mapper)
        {
            _categoryManager = categoryManager;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("api/[controller]/GetAll")]
        public async Task<List<CategoryOutputDto>> GetAll()
        {
            var result = await _categoryManager.GetAllAsync();

            return result?.Select(x => new CategoryOutputDto()
            {
                Id = x.Id,
                DisplayName = x.DisplayName
            }).ToList();

        }

        [HttpGet()]
        [Route("api/[controller]/GetById")]
        public async Task<CategoryOutputDto> Get(int id)
        {
            CategoryOutputDto author = new CategoryOutputDto();

            var result = await _categoryManager.GetAsync(id);
            author = _mapper.Map<CategoryOutputDto>(result);
            return author;
        }

        [HttpPost]
        [Route("api/[controller]/Create")]
        public async Task Post([FromBody] CategoryInputDto input)
        {
            var category = _mapper.Map<Category>(input);
            await _categoryManager.InsertAsync(category);
        }

        [HttpPut()]
        [Route("api/[controller]/Update")]
        public async Task<CategoryOutputDto> Put([FromBody] CategoryUpdateDto input)
        {
            var category = _mapper.Map<Category>(input);
            var result = await _categoryManager.UpdateAsync(category);

            return _mapper.Map<CategoryOutputDto>(result);
        }

        [HttpDelete()]
        [Route("api/[controller]/Delete")]
        public void Delete(int id)
        {
            _categoryManager.DeleteAsync(id);
        }
    }
}