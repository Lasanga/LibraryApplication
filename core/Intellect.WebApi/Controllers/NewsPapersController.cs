using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Intellect.Core.Models.Newspapers;
using Intellect.Core.Models.Newspapers.Dtos;
using Intellect.Core.Permissions;
using Intellect.DomainServices.Newspapers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intellect.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class NewsPapersController : ControllerBase
    {
        private readonly INewspaperManager _newspaperManager;
        private readonly IMapper _mapper;

        public NewsPapersController(INewspaperManager newspaperManager, IMapper mapper)
        {
            _newspaperManager = newspaperManager;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("GetAll")]
        [Authorize(Policy = PolicyTypes.NewspaperPolicy.View)]
        public async Task<List<NewspaperOutputDto>> GetAll()
        {
            List<NewspaperOutputDto> newspapers = new List<NewspaperOutputDto>();
            var result = await _newspaperManager.GetAllAsync();

            foreach (var item in result)
            {
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                newspapers.Add(new NewspaperOutputDto()
                {
                    DisplayName = item.DisplayName,
                    Price = item.Price,
                    Publisher = item.Publisher,
                    SourceType = item.SourceType,
                    Year = item.Year,
                    Id = item.Id,
                    PublicationDate = item.PublicationDate,
                    TotalSubParts = item.TotalSubParts
                });
            }
            return newspapers;
        }

        [HttpGet()]
        [Route("GetById")]
        [Authorize(Policy = PolicyTypes.NewspaperPolicy.View)]
        public async Task<NewspaperOutputDto> Get(int id)
        {
            NewspaperOutputDto newspaper = new NewspaperOutputDto();
            var result = await _newspaperManager.GetAsync(id);

            newspaper = _mapper.Map<NewspaperOutputDto>(result);
            return newspaper;
        }

        [HttpPost]
        [Route("Create")]
        [Authorize(Policy = PolicyTypes.NewspaperPolicy.Cru)]
        public async Task Post([FromBody] NewspaperInputDto input)
        {
            var newsPaper = _mapper.Map<NewsPaper>(input);
            await _newspaperManager.InsertAsync(newsPaper);
        }

        [HttpPut()]
        [Route("Update")]
        [Authorize(Policy = PolicyTypes.NewspaperPolicy.Cru)]
        public async Task<NewspaperOutputDto> Put([FromBody] NewspaperUpdateDto input)
        {
            var newsPaper = _mapper.Map<NewsPaper>(input);
            var result = await _newspaperManager.UpdateAsync(newsPaper);

            return _mapper.Map<NewspaperOutputDto>(result);
        }

        [HttpDelete()]
        [Route("Delete")]
        [Authorize(Policy = PolicyTypes.NewspaperPolicy.delete)]
        public void Delete(int id)
        {
            _newspaperManager.DeleteAsync(id);
        }
    }
}