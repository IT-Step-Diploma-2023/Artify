using Artify.Data;
using Artify.Models.Artworks.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class ToolsRepository : IRepository<Tool>
    {
        private ApplicationDbContext context;
        public ToolsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Tool obj)
        {
            context.Tools.Add(obj);
        }

        public IQueryable<Tool> GetAll()
        {
            return context.Tools;
        }

        public Tool? GetById(int id)
        {
            return context.Tools.Find(id);
        }

        public IQueryable<Tool> Query(Expression<Func<Tool, bool>> filter)
        {
            return context.Tools.Where(filter);
        }

        public void Remove(int id)
        {
            Tool? tool = context.Tools.Find(id);
            if (tool != null)
                context.Tools.Remove(tool);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Tool obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
