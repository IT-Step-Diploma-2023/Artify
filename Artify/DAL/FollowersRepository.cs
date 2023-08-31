using Artify.Data;
using Artify.Models.DbModels.Users.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class FollowersRepository : IRepository<Follower>
    {
        private ApplicationDbContext context;
        public FollowersRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Follower obj)
        {
            context.Followers.Add(obj);
        }

        public IQueryable<Follower> GetAll()
        {
            return context.Followers;
        }

        public Follower? GetById(int id)
        {
            return context.Followers.Find(id);
        }

        public IQueryable<Follower> Query(Expression<Func<Follower, bool>> filter)
        {
            return context.Followers.Where(filter);
        }

        public void Remove(int id)
        {
            Follower? follower = context.Followers.Find(id);
            if (follower != null)
                context.Followers.Remove(follower);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async Task<int> SaveAsync()
        {
            return await context.SaveChangesAsync();
        }

        public void Update(Follower obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
