using Artify.Data;
using Artify.Models.Artworks;
using Artify.Models.WorkPreference;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class EducationsRepository : IRepository<Education>
    {
        private ApplicationDbContext context;
        public EducationsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Education obj)
        {
            context.Educations.Add(obj);
        }

        public IQueryable<Education> GetAll()
        {
            return context.Educations;
        }

        public Education? GetById(int id)
        {
            return context.Educations.Find(id);
        }

        public IQueryable<Education> Query(Expression<Func<Education, bool>> filter)
        {
            return context.Educations.Where(filter);
        }

        public void Remove(int id)
        {
            Education? education = context.Educations.Find(id);
            if (education != null)
                context.Educations.Remove(education);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Education obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
