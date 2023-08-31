using Artify.Data;
using Artify.Models.DbModels.Users.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class UserEmployerCommentsRepository : IRepository<UserEmployerComment>
    {
        private ApplicationDbContext context;
        public UserEmployerCommentsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(UserEmployerComment obj)
        {
            context.UserEmployerComments.Add(obj);
        }

        public IQueryable<UserEmployerComment> GetAll()
        {
            return context.UserEmployerComments;
        }

        public UserEmployerComment? GetById(int id)
        {
            return context.UserEmployerComments.Find(id);
        }

        public IQueryable<UserEmployerComment> Query(Expression<Func<UserEmployerComment, bool>> filter)
        {
            return context.UserEmployerComments.Where(filter);
        }

        public void Remove(int id)
        {
            UserEmployerComment? comment = context.UserEmployerComments.Find(id);
            if (comment != null)
                context.UserEmployerComments.Remove(comment);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async Task<int> SaveAsync()
        {
            return await context.SaveChangesAsync();
        }

        public void Update(UserEmployerComment obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
