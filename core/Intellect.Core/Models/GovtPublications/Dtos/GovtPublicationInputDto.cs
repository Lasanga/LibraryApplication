using Intellect.Core.Models.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Models.GovtPublications.Dtos
{
    public class GovtPublicationInputDto
    {
        public int TotalPages { get; set; }

        public string Sector { get; set; }

        public string DisplayName { get; set; }

        public string Publisher { get; set; }

        public DateTime Year { get; set; }

        public int Price { get; set; }

        public SourceType SourceType { get; set; }

        public int AuthorId { get; set; }

        public int CategoryId { get; set; }
    }
}
