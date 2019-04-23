﻿using Intellect.Core.Models.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Models.OlaLeafs.Dtos
{
    public class OlaLeafInputDto
    {
        public string Description { get; set; }

        public string DisplayName { get; set; }

        public string Publisher { get; set; }

        public DateTime Year { get; set; }

        public int Price { get; set; }
        public SourceType SourceType { get; set; } = SourceType.available;

        public int AuthorId { get; set; }

        public int CategoryId { get; set; }
    }
}
