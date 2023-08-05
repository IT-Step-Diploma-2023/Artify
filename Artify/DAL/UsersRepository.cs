using Artify.Data;
using Artify.Models;
using Artify.Models.DbModels.Users;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class UsersRepository : IRepository<User>
    {
        private ApplicationDbContext context;
        public UsersRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(User obj)
        {
            context.Users.Add(obj);
        }

        public IQueryable<User> GetAll()
        {
            return context.Users;
        }

        public User? GetById(int id)
        {
            return context.Users.Find(id);
        }

        public IQueryable<User> Query(Expression<Func<User, bool>> filter)
        {
            return context.Users.Where(filter);
        }

        public void Remove(int id)
        {
            User? user = context.Users.Find(id);
            if (user != null)
                context.Users.Remove(user);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(User obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
