using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Intellect.Core.Models.Helpers
{
    public abstract class AuditedEntity
    {
        [Key]
        public int Id { get; set; }

        [DefaultValue(false)]
        public bool IsDeleted { get; set; }

        public int DeleterUserId { get; set; }

        public DateTime? DeletedTime { get; set; }

        public int CreatorUserId { get; set; }

        public DateTime CreationTime { get; set; }

        public DateTime? LastModificationDate { get; set; }

        public int LastModifierUser { get; set; }
    }
}
