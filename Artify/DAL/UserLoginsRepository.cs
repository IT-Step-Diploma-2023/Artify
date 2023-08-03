using Artify.Data;
using Artify.Models.Users;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class UserLoginsRepository : IRepository<UserLogin>
    {
        private ApplicationDbContext context;
        public UserLoginsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(UserLogin obj)
        {
            context.UserLogins.Add(obj);
        }

        public IQueryable<UserLogin> GetAll()
        {
            return context.UserLogins;
        }

        public UserLogin? GetById(int id)
        {
            return context.UserLogins.Find(id);
        }

        public IQueryable<UserLogin> Query(Expression<Func<UserLogin, bool>> filter)
        {
            return context.UserLogins.Where(filter);
        }

        public void Remove(int id)
        {
            UserLogin? login = context.UserLogins.Find(id);
            if (login != null)
                context.UserLogins.Remove(login);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(UserLogin obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
