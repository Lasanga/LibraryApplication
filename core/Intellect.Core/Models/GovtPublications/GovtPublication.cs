using Intellect.Core.Models.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Models.GovtPublications
{
    public class GovtPublication : SourceEntity
    {
        public int TotalPages { get; set; }

        public string Sector { get; set; }
    }
}
