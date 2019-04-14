using Intellect.Infrastructure.EntityFramework;
using System.Linq;
using System.Threading.Tasks;

namespace Intellect.Infrastructure.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly IntellectDbContext _context;

        public Repository(IntellectDbContext context)
        {
            _context = context;
        }

        public void DeleteAsync(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            _context.SaveChanges();
        }

        public async Task<IQueryable<TEntity>> GetAllAsync()
        {
            var result =  _context.Set<TEntity>();
            return result;
        }

        public async Task<TEntity> GetAsync(int id)
        {
            var result = await _context.Set<TEntity>().FindAsync(id);
            return result;
        }

        public async Task InsertAsync(TEntity entity)
        {
            await _context.Set<TEntity>().AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<TEntity> UpdateAsync(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            await _context.SaveChangesAsync();
            return entity;
        }
    }
}
