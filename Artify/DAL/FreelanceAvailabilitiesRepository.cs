using Artify.Data;
using Artify.Models.WorkPreference;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class FreelanceAvailabilitiesRepository : IRepository<FreelanceAvailability>
    {
        private ApplicationDbContext context;
        public FreelanceAvailabilitiesRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(FreelanceAvailability obj)
        {
            context.FreelanceAvailabilities.Add(obj);
        }

        public IQueryable<FreelanceAvailability> GetAll()
        {
            return context.FreelanceAvailabilities;
        }

        public FreelanceAvailability? GetById(int id)
        {
            return context.FreelanceAvailabilities.Find(id);
        }

        public IQueryable<FreelanceAvailability> Query(Expression<Func<FreelanceAvailability, bool>> filter)
        {
            return context.FreelanceAvailabilities.Where(filter);
        }

        public void Remove(int id)
        {
            FreelanceAvailability? availability = context.FreelanceAvailabilities.Find(id);
            if (availability != null)
                context.FreelanceAvailabilities.Remove(availability);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(FreelanceAvailability obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
