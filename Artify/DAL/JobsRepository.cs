using Artify.Data;
using Artify.Models.Artworks;
using Artify.Models.WorkPreferences;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class JobsRepository : IRepository<Job>
    {
        private ApplicationDbContext context;
        public JobsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Job obj)
        {
            context.Jobs.Add(obj);
        }

        public IQueryable<Job> GetAll()
        {
            return context.Jobs;
        }

        public Job? GetById(int id)
        {
            return context.Jobs.Find(id);
        }

        public IQueryable<Job> Query(Expression<Func<Job, bool>> filter)
        {
            return context.Jobs.Where(filter);
        }

        public void Remove(int id)
        {
            Job? job = context.Jobs.Find(id);
            if (job != null)
                context.Jobs.Remove(job);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Job obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
