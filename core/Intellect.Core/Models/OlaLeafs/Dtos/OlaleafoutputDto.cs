using Intellect.Core.Models.Authors;
using Intellect.Core.Models.Authors.Dtos;
using Intellect.Core.Models.Categories;
using Intellect.Core.Models.Categories.Dtos;
using Intellect.Core.Models.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Models.OlaLeafs.Dtos
{
    public class OlaleafoutputDto
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public string DisplayName { get; set; }

        public string Publisher { get; set; }

        public DateTime Year { get; set; }

        public int Price { get; set; }

        public SourceType SourceType { get; set; }

        public AuthorOutputDto Author { get; set; }

        public CategoryOutputDto Category { get; set; }
    }
}
