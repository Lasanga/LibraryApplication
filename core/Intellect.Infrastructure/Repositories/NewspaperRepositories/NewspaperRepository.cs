using Intellect.Core.Models.Newspapers;
using Intellect.Infrastructure.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Intellect.Infrastructure.Repositories.NewspaperRepositories
{
    public class NewspaperRepository : Repository<NewsPaper> , INewspaperRepository
    {
        public NewspaperRepository(IntellectDbContext context)
            :base(context)
        {

        }
    }
}
