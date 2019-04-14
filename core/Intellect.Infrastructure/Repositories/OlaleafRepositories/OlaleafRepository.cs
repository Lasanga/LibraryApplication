using Intellect.Core.Models.OlaLeafs;
using Intellect.Infrastructure.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Infrastructure.Repositories.OlaleafRepositories
{
    public class OlaleafRepository : Repository<OlaLeaf>, IOlaleafRepository
    {
        public OlaleafRepository(IntellectDbContext context)
            :base(context)
        {

        }
    }
}
