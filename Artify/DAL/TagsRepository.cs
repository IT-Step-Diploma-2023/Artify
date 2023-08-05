using Artify.Data;
using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class TagsRepository : IRepository<Tag>
    {
        private ApplicationDbContext context;
        public TagsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Tag obj)
        {
            context.Tags.Add(obj);
        }

        public IQueryable<Tag> GetAll()
        {
            return context.Tags;
        }

        public Tag? GetById(int id)
        {
            return context.Tags.Find(id);
        }

        public IQueryable<Tag> Query(Expression<Func<Tag, bool>> filter)
        {
            return context.Tags.Where(filter);
        }

        public void Remove(int id)
        {
            Tag? tag = context.Tags.Find(id);
            if (tag != null)
                context.Tags.Remove(tag);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Tag obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
