using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intellect.console.Dtos
{
    public class BooksOutputDto
    {
        public int Id { get; set; }

        public string IsbnNumber { get; set; }

        public int? TotalPages { get; set; }

        public string DisplayName { get; set; }

        public string Publisher { get; set; }

        public DateTime Year { get; set; }

        public int Price { get; set; }

    }
}
