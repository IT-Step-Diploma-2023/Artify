using Artify.Data;
using Artify.Models.WorkPreferences;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class FullTimeAvailabilitiesRepository : IRepository<FullTimeAvailability>
    {
        private ApplicationDbContext context;
        public FullTimeAvailabilitiesRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(FullTimeAvailability obj)
        {
            context.FullTimeAvailabilities.Add(obj);
        }

        public IQueryable<FullTimeAvailability> GetAll()
        {
            return context.FullTimeAvailabilities;
        }

        public FullTimeAvailability? GetById(int id)
        {
            return context.FullTimeAvailabilities.Find(id);
        }

        public IQueryable<FullTimeAvailability> Query(Expression<Func<FullTimeAvailability, bool>> filter)
        {
            return context.FullTimeAvailabilities.Where(filter);
        }

        public void Remove(int id)
        {
            FullTimeAvailability ? availability = context.FullTimeAvailabilities.Find(id);
            if (availability != null)
                context.FullTimeAvailabilities.Remove(availability);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(FullTimeAvailability obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
