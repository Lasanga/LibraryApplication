using Intellect.Core.Models.Authors;
using Intellect.Core.Models.Categories;
using Intellect.Core.Models.Helpers;
using System;

namespace Intellect.Core.Models.GovtPublications.Dtos
{
    public class GovtPublicationUpdateDto
    {
        public int Id { get; set; }

        public int TotalPages { get; set; }

        public string Sector { get; set; }

        public string DisplayName { get; set; }

        public string Publisher { get; set; }

        public DateTime Year { get; set; }

        public int Price { get; set; }

        public SourceType SourceType { get; set; }

        public Author Author { get; set; }

        public Category Category { get; set; }
    }
}
