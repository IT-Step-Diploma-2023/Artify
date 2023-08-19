using Artify.Data;
using Artify.Models.DbModels.DbModels.Artworks;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class ProjectsRepository : IRepository<Project>
    {
        private ApplicationDbContext context;
        public ProjectsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Project obj)
        {
            context.Projects.Add(obj);
        }

        public IQueryable<Project> GetAll()
        {
            return context.Projects;
        }

        public Project? GetById(int id)
        {
            return context.Projects.Find(id);
        }

        public IQueryable<Project> Query(Expression<Func<Project, bool>> filter)
        {
            return context.Projects.Where(filter);
        }

        public void Remove(int id)
        {
            Project? project = context.Projects.Find(id);
            if (project != null)
                context.Projects.Remove(project);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Project obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
