using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Core.Models.Newspapers.Dtos
{
    public class NewspaperUpdateDto
    {
        public int Id { get; set; }

        public DateTime PublicationDate { get; set; }

        public int TotalSubParts { get; set; }
    }
}
