using Artify.Data;
using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class AppreciationsRepository : IRepository<Appreciation>
    {
        private ApplicationDbContext context;
        public AppreciationsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Appreciation obj)
        {
            context.Appreciations.Add(obj);
        }

        public IQueryable<Appreciation> GetAll()
        {
            return context.Appreciations;
        }

        public Appreciation? GetById(int id)
        {
            return context.Appreciations.Find(id);
        }

        public IQueryable<Appreciation> Query(Expression<Func<Appreciation, bool>> filter)
        {
            return context.Appreciations.Where(filter);
        }

        public void Remove(int id)
        {
            Appreciation? appreciation = context.Appreciations.Find(id);
            if (appreciation != null)
                context.Appreciations.Remove(appreciation);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Appreciation obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
