using Artify.Data;
using Artify.Models.DbModels.DbModels.Artworks;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class ShotsRepository : IRepository<Shot>
    {
        private ApplicationDbContext context;
        public ShotsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Shot obj)
        {
            var res = context.Shots.Add(obj);
            Console.WriteLine(  );
        }

        public IQueryable<Shot> GetAll()
        {
            return context.Shots;
        }

        public Shot? GetById(int id)
        {
            return context.Shots.Find(id);
        }

        public IQueryable<Shot> Query(Expression<Func<Shot, bool>> filter)
        {
            return context.Shots.Where(filter);
        }

        public void Remove(int id)
        {
            Shot? shot = context.Shots.Find(id);
            if (shot != null)
                context.Shots.Remove(shot);
        }

        public void Save()
        {
            int res = context.SaveChanges();
            Console.WriteLine(  );
        }

        public async Task<int> SaveAsync()
        {
            return await context.SaveChangesAsync();
        }

        public void Update(Shot obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
