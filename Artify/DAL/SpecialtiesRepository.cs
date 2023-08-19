using Artify.Data;
using Artify.Models.DbModels.WorkPreferences;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class SpecialitiesRepository : IRepository<Speciality>
    {
        private ApplicationDbContext context;
        public SpecialitiesRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Speciality obj)
        {
            context.Specialities.Add(obj);
        }

        public IQueryable<Speciality> GetAll()
        {
            return context.Specialities;
        }

        public Speciality? GetById(int id)
        {
            return context.Specialities.Find(id);
        }

        public IQueryable<Speciality> Query(Expression<Func<Speciality, bool>> filter)
        {
            return context.Specialities.Where(filter);
        }

        public void Remove(int id)
        {
            Speciality? speciality = context.Specialities.Find(id);
            if (speciality != null)
                context.Specialities.Remove(speciality);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Speciality obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
