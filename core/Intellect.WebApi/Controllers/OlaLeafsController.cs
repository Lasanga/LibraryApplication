using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Intellect.Core;
using Intellect.Core.Models.OlaLeafs;
using Intellect.Core.Models.OlaLeafs.Dtos;
using Intellect.Core.Permissions;
using Intellect.DomainServices.OlaLeafs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intellect.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class OlaLeafsController : ControllerBase
    {
        private readonly IOlaleafManager _olaLeafanager;
        private readonly IMapper _mapper;

        public OlaLeafsController(IOlaleafManager olaleafManager, IMapper mapper)
        {
            _olaLeafanager = olaleafManager;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("GetAll")]
        [Authorize(Policy = PolicyTypes.OlaLeafPolicy.View)]
        public async Task<List<OlaleafoutputDto>> GetAll()
        {
            List<OlaleafoutputDto> olaLeafs = new List<OlaleafoutputDto>();
            var result = await _olaLeafanager.GetAllAsync();

            foreach (var item in result)
            {
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                olaLeafs.Add(new OlaleafoutputDto()
                {
                    DisplayName = item.DisplayName,
                    Price = item.Price,
                    Publisher = item.Publisher,
                    SourceType = item.SourceType,
                    Year = item.Year,
                    Id = item.Id,
                    Description = item.Description,
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
            return olaLeafs;
        }

        [HttpGet]
        [Route("GetRare")]
        [Authorize(Policy = PolicyTypes.OlaLeafPolicy.rare)]
        public async Task<List<OlaleafoutputDto>> GetRare()
        {
            List<OlaleafoutputDto> olaLeafs = new List<OlaleafoutputDto>();
            var result = await _olaLeafanager.GetAllRare();

            foreach (var item in result)
            {
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                olaLeafs.Add(new OlaleafoutputDto()
                {
                    DisplayName = item.DisplayName,
                    Price = item.Price,
                    Publisher = item.Publisher,
                    SourceType = item.SourceType,
                    Year = item.Year,
                    Id = item.Id,
                    Description = item.Description,
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
            return olaLeafs;
        }

        [HttpGet()]
        [Route("GetById")]
        [Authorize(Policy = PolicyTypes.OlaLeafPolicy.View)]
        public async Task<OlaleafoutputDto> Get(int id)
        {
            OlaleafoutputDto olaLeaf = new OlaleafoutputDto();
            var result = await _olaLeafanager.GetAsync(id);

            olaLeaf = _mapper.Map<OlaleafoutputDto>(result);
            return olaLeaf;
        }

        [HttpPost]
        [Route("Create")]
        [Authorize(Policy = PolicyTypes.OlaLeafPolicy.Cru)]
        public async Task Post([FromBody] OlaLeafInputDto input)
        {
            var olaLeaf = _mapper.Map<OlaLeaf>(input);
            await _olaLeafanager.InsertAsync(olaLeaf);
        }

        [HttpPut()]
        [Route("Update")]
        [Authorize(Policy = PolicyTypes.OlaLeafPolicy.Cru)]
        public async Task<OlaleafoutputDto> Put([FromBody] OlaleafUpdateDto input)
        {
            var olaLeaf = _mapper.Map<OlaLeaf>(input);
            var result = await _olaLeafanager.UpdateAsync(olaLeaf);

            return _mapper.Map<OlaleafoutputDto>(result);
        }

        [HttpDelete()]
        [Route("Delete")]
        [Authorize(Policy = PolicyTypes.OlaLeafPolicy.delete)]
        public void Delete(int id)
        {
            _olaLeafanager.DeleteAsync(id);
        }
    }
}