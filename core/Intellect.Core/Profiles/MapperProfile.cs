using AutoMapper;
using Intellect.Core.Models.Authorization;
using Intellect.Core.Models.Authorization.Dtos;
using Intellect.Core.Models.Authors;
using Intellect.Core.Models.Authors.Dtos;
using Intellect.Core.Models.Books;
using Intellect.Core.Models.Books.Dtos;
using Intellect.Core.Models.Categories;
using Intellect.Core.Models.Categories.Dtos;
using Intellect.Core.Models.GovtPublications;
using Intellect.Core.Models.GovtPublications.Dtos;
using Intellect.Core.Models.Newspapers;
using Intellect.Core.Models.Newspapers.Dtos;
using Intellect.Core.Models.OlaLeafs;
using Intellect.Core.Models.OlaLeafs.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Profiles
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<CategoryInputDto, Category>();
            CreateMap<CategoryUpdateDto, Category>();
            CreateMap<Category, CategoryOutputDto>();

            CreateMap<AuthorInputDto, Author>();
            CreateMap<AuthorUpdateDto, Author>();
            CreateMap<Author, AuthorOutputDto>();

            CreateMap<BookInputDto, Book>();
            CreateMap<BookUpdateDto, Book>();
            CreateMap<Book, BookOutputDto>();

            CreateMap<NewspaperInputDto, NewsPaper>();
            CreateMap<NewspaperUpdateDto, NewsPaper>();
            CreateMap<NewsPaper, NewspaperOutputDto>();

            CreateMap<GovtPublicationInputDto, GovtPublication>();
            CreateMap<GovtPublicationUpdateDto, GovtPublication>();
            CreateMap<GovtPublication, GovtPublicationOutputDto>();

            CreateMap<OlaLeafInputDto, OlaLeaf>();
            CreateMap<OlaleafUpdateDto, OlaLeaf>();
            CreateMap<OlaLeaf, OlaleafoutputDto>();

            CreateMap<ApplicationUser, UnRegUserOutputDto>();
        }
    }
}
