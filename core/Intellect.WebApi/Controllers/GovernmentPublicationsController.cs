using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Intellect.Core.Models.GovtPublications;
using Intellect.Core.Models.GovtPublications.Dtos;
using Intellect.DomainServices.GovtPublications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intellect.WebApi.Controllers
{
    [ApiController]
    public class GovernmentPublicationsController : ControllerBase
    {
        private readonly IGovtPublicationManager _govtManager;
        private readonly IMapper _mapper;

        public GovernmentPublicationsController(IGovtPublicationManager govtManager, IMapper mapper)
        {
            _govtManager = govtManager;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("api/[controller]/GetAll")]
        public async Task<List<GovtPublicationOutputDto>> GetAll()
        {
            List<GovtPublicationOutputDto> govts = new List<GovtPublicationOutputDto>();
            var result = await _govtManager.GetAllAsync();

            foreach (var item in result)
            {
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                //var author = await _authorRepository.GetAsync(item.AuthorId);
                govts.Add(new GovtPublicationOutputDto()
                {
                    DisplayName = item.DisplayName,
                    Price = item.Price,
                    Publisher = item.Publisher,
                    SourceType = item.SourceType,
                    TotalPages = item.TotalPages,
                    Year = item.Year,
                    Id = item.Id,
                    Sector = item.Sector
                });
            }
            return govts;
        }

        [HttpGet()]
        [Route("api/[controller]/GetById")]
        public async Task<GovtPublicationOutputDto> Get(int id)
        {
            GovtPublicationOutputDto govt = new GovtPublicationOutputDto();
            var result = await _govtManager.GetAsync(id);

            govt = _mapper.Map<GovtPublicationOutputDto>(result);
            return govt;
        }

        [HttpPost]
        [Route("api/[controller]/Create")]
        public async Task Post([FromBody] GovtPublicationInputDto input)
        {
            var govt = _mapper.Map<GovtPublication>(input);
            await _govtManager.InsertAsync(govt);
        }

        [HttpPut()]
        [Route("api/[controller]/Update")]
        public async Task<GovtPublicationOutputDto> Put([FromBody] GovtPublicationUpdateDto input)
        {
            var govt = _mapper.Map<GovtPublication>(input);
            var result = await _govtManager.UpdateAsync(govt);

            return _mapper.Map<GovtPublicationOutputDto>(result);
        }

        [HttpDelete()]
        [Route("api/[controller]/Delete")]
        public void Delete(int id)
        {
            _govtManager.DeleteAsync(id);
        }
    }
}