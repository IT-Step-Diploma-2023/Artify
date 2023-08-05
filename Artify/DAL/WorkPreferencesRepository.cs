using Artify.Data;
using Artify.Models.DbModels.WorkPreferences;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class WorkPreferencesRepository : IRepository<WorkPreference>
    {
        private ApplicationDbContext context;
        public WorkPreferencesRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(WorkPreference obj)
        {
            context.WorkPreferences.Add(obj);
        }

        public IQueryable<WorkPreference> GetAll()
        {
            return context.WorkPreferences;
        }

        public WorkPreference? GetById(int id)
        {
            return context.WorkPreferences.Find(id);
        }

        public IQueryable<WorkPreference> Query(Expression<Func<WorkPreference, bool>> filter)
        {
            return context.WorkPreferences.Where(filter);
        }

        public void Remove(int id)
        {
            WorkPreference? preference = context.WorkPreferences.Find(id);
            if (preference != null)
                context.WorkPreferences.Remove(preference);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(WorkPreference obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
