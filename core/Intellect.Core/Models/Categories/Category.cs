using Intellect.Core.Models.Books;
using Intellect.Core.Models.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Intellect.Core.Models.Categories
{
    public class Category : AuditedEntity
    {
        public Category()
        {
            Books = new HashSet<Book>();
        }

        [Required]
        [MaxLength(IntellectConsts.maxDisplayLength, ErrorMessage = "Display name too long")]
        public string DisplayName { get; set; }

        public virtual ICollection<Book> Books { get; set; }
    }
}
