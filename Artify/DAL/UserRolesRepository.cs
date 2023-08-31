using Artify.Data;
using Artify.Models.DbModels.Users;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class UserRolesRepository : IRepository<UserRole>
    {
        private ApplicationDbContext context;
        public UserRolesRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(UserRole obj)
        {
            context.UserRoles.Add(obj);
        }

        public IQueryable<UserRole> GetAll()
        {
            return context.UserRoles;
        }

        public UserRole? GetById(int id)
        {
            return context.UserRoles.Find(id);
        }

        public IQueryable<UserRole> Query(Expression<Func<UserRole, bool>> filter)
        {
            return context.UserRoles.Where(filter);
        }

        public void Remove(int id)
        {
            UserRole? role = context.UserRoles.Find(id);
            if (role != null)
                context.UserRoles.Remove(role);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async Task<int> SaveAsync()
        {
            return await context.SaveChangesAsync();
        }

        public void Update(UserRole obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
