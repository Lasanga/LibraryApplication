using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Intellect.Core.Models.OlaLeafs;
using Intellect.Core.Models.OlaLeafs.Dtos;
using Intellect.DomainServices.OlaLeafs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Intellect.WebApi.Controllers
{
    [ApiController]
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
        [Route("api/[Controller]/GetAll")]
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
                    Description = item.Description
                });
            }
            return olaLeafs;
        }

        [HttpGet()]
        [Route("api/[Controller]/GetById")]
        public async Task<OlaleafoutputDto> Get(int id)
        {
            OlaleafoutputDto olaLeaf = new OlaleafoutputDto();
            var result = await _olaLeafanager.GetAsync(id);

            olaLeaf = _mapper.Map<OlaleafoutputDto>(result);
            return olaLeaf;
        }

        [HttpPost]
        [Route("api/[Controller]/Create")]
        public async Task Post([FromBody] OlaLeafInputDto input)
        {
            var olaLeaf = _mapper.Map<OlaLeaf>(input);
            await _olaLeafanager.InsertAsync(olaLeaf);
        }

        [HttpPut()]
        [Route("api/[Controller]/Update")]
        public async Task<OlaleafoutputDto> Put([FromBody] OlaleafUpdateDto input)
        {
            var olaLeaf = _mapper.Map<OlaLeaf>(input);
            var result = await _olaLeafanager.UpdateAsync(olaLeaf);

            return _mapper.Map<OlaleafoutputDto>(result);
        }

        [HttpDelete()]
        [Route("api/[Controller]/Delete")]
        public void Delete(int id)
        {
            _olaLeafanager.DeleteAsync(id);
        }
    }
}