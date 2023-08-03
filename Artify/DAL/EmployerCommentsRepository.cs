using Artify.Data;
using Artify.Models.Artworks.Attributes;
using Artify.Models.Users.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class EmployerCommentsRepository : IRepository<EmployerComment>
    {
        private ApplicationDbContext context;
        public EmployerCommentsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(EmployerComment obj)
        {
            context.EmployerComments.Add(obj);
        }

        public IQueryable<EmployerComment> GetAll()
        {
            return context.EmployerComments;
        }

        public EmployerComment? GetById(int id)
        {
            return context.EmployerComments.Find(id);
        }

        public IQueryable<EmployerComment> Query(Expression<Func<EmployerComment, bool>> filter)
        {
            return context.EmployerComments.Where(filter);
        }

        public void Remove(int id)
        {
            EmployerComment? comment = context.EmployerComments.Find(id);
            if (comment != null)
                context.EmployerComments.Remove(comment);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(EmployerComment obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
