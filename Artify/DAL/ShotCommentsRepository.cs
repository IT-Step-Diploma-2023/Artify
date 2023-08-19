using Artify.Data;
using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class ShotCommentsRepository : IRepository<ShotComment>
    {
        private ApplicationDbContext context;
        public ShotCommentsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(ShotComment obj)
        {
            context.ShotComments.Add(obj);
        }

        public IQueryable<ShotComment> GetAll()
        {
            return context.ShotComments;
        }

        public ShotComment? GetById(int id)
        {
            return context.ShotComments.Find(id);
        }

        public IQueryable<ShotComment> Query(Expression<Func<ShotComment, bool>> filter)
        {
            return context.ShotComments.Where(filter);
        }

        public void Remove(int id)
        {
            ShotComment? comment = context.ShotComments.Find(id);
            if (comment != null)
                context.ShotComments.Remove(comment);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(ShotComment obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
