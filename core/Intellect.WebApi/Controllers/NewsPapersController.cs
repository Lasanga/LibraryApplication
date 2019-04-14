using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Intellect.Core.Models.Newspapers;
using Intellect.Core.Models.Newspapers.Dtos;
using Intellect.DomainServices.Newspapers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intellect.WebApi.Controllers
{
    [ApiController]
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
        [Route("api/[controller]/GetAll")]
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
        [Route("api/[controller]/GetById")]
        public async Task<NewspaperOutputDto> Get(int id)
        {
            NewspaperOutputDto newspaper = new NewspaperOutputDto();
            var result = await _newspaperManager.GetAsync(id);

            newspaper = _mapper.Map<NewspaperOutputDto>(result);
            return newspaper;
        }

        [HttpPost]
        [Route("api/[controller]/Create")]
        public async Task Post([FromBody] NewspaperInputDto input)
        {
            var newsPaper = _mapper.Map<NewsPaper>(input);
            await _newspaperManager.InsertAsync(newsPaper);
        }

        [HttpPut()]
        [Route("api/[controller]/Update")]
        public async Task<NewspaperOutputDto> Put([FromBody] NewspaperUpdateDto input)
        {
            var newsPaper = _mapper.Map<NewsPaper>(input);
            var result = await _newspaperManager.UpdateAsync(newsPaper);

            return _mapper.Map<NewspaperOutputDto>(result);
        }

        [HttpDelete()]
        [Route("api/[controller]/Delete")]
        public void Delete(int id)
        {
            _newspaperManager.DeleteAsync(id);
        }
    }
}