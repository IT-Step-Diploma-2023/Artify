using Artify.Data;
using Artify.Models.DbModels.Users.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class SocialProfilesRepository : IRepository<SocialProfile>
    {
        private ApplicationDbContext context;
        public SocialProfilesRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(SocialProfile obj)
        {
            context.SocialProfiles.Add(obj);
        }

        public IQueryable<SocialProfile> GetAll()
        {
            return context.SocialProfiles;
        }

        public SocialProfile? GetById(int id)
        {
            return context.SocialProfiles.Find(id);
        }

        public IQueryable<SocialProfile> Query(Expression<Func<SocialProfile, bool>> filter)
        {
            return context.SocialProfiles.Where(filter);
        }

        public void Remove(int id)
        {
            SocialProfile? profile = context.SocialProfiles.Find(id);
            if (profile != null)
                context.SocialProfiles.Remove(profile);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async Task<int> SaveAsync()
        {
            return await context.SaveChangesAsync();
        }

        public void Update(SocialProfile obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
