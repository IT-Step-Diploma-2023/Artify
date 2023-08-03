using Artify.Data;
using Artify.Models.Users;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class PermissionsRepository : IRepository<Permission>
    {
        private ApplicationDbContext context;
        public PermissionsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Permission obj)
        {
            context.Permissions.Add(obj);
        }

        public IQueryable<Permission> GetAll()
        {
            return context.Permissions;
        }

        public Permission? GetById(int id)
        {
            return context.Permissions.Find(id);
        }

        public IQueryable<Permission> Query(Expression<Func<Permission, bool>> filter)
        {
            return context.Permissions.Where(filter);
        }

        public void Remove(int id)
        {
            Permission? permission = context.Permissions.Find(id);
            if (permission != null)
                context.Permissions.Remove(permission);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Permission obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
