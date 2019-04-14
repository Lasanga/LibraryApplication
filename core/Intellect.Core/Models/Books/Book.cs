using Intellect.Core.Models.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Intellect.Core.Models.Books
{
    public class Book : SourceEntity
    {
        [Required]
        public string IsbnNumber { get; set; }

        public int? TotalPages { get; set; }
    }
}
