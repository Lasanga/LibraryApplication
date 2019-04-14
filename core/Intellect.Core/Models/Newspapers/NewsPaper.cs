using Intellect.Core.Models.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Intellect.Core.Models.Newspapers
{
    public class NewsPaper : SourceEntity
    {
        [Required]
        public DateTime PublicationDate { get; set; }

        public int TotalSubParts { get; set; }
    }
}
