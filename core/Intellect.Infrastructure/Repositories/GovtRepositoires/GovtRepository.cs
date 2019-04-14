using Intellect.Core.Models.GovtPublications;
using Intellect.Infrastructure.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Infrastructure.Repositories.GovtRepositoires
{
    public class GovtRepository : Repository<GovtPublication>, IGovtRepository
    {
        public GovtRepository(IntellectDbContext context)
            :base(context)
        {

        }
    }
}
