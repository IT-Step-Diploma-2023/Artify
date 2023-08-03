using Artify.Data;
using Artify.Models.Artworks;
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
            context.Shots.Add(obj);
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
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Shot obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
