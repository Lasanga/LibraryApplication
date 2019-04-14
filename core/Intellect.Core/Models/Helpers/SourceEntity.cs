using Intellect.Core.Models.Authors;
using Intellect.Core.Models.Categories;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Intellect.Core.Models.Helpers
{
    public abstract class SourceEntity : AuditedEntity
    {
        [Required]
        [MaxLength(IntellectConsts.maxDisplayLength, ErrorMessage = "Display name too long")]
        public string DisplayName { get; set; }

        public string Publisher { get; set; }

        public DateTime Year { get; set; }

        [Required]
        public int Price { get; set; }

        [Required]
        [DefaultValue(SourceType.available)]
        public SourceType SourceType { get; set; }

        [ForeignKey("Author")]
        public int AuthorId { get; set; }

        [ForeignKey("Category")]
        public int CategoryId { get; set; }

        public virtual Author Author { get; set; }

        public virtual Category Category { get; set; }
    }
}
