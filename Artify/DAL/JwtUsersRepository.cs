using Artify.Data;
using Artify.Models.Users;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class JwtUsersRepository : IRepository<JwtUser>
    {
        private ApplicationDbContext context;
        public JwtUsersRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(JwtUser obj)
        {
            context.JwtUsers.Add(obj);
        }

        public IQueryable<JwtUser> GetAll()
        {
            return context.JwtUsers;
        }

        public JwtUser? GetById(int id)
        {
            return context.JwtUsers.Find(id);
        }

        public IQueryable<JwtUser> Query(Expression<Func<JwtUser, bool>> filter)
        {
            return context.JwtUsers.Where(filter);
        }

        public void Remove(int id)
        {
            JwtUser? jwtUser = context.JwtUsers.Find(id);
            if (jwtUser != null)
                context.JwtUsers.Remove(jwtUser);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(JwtUser obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
