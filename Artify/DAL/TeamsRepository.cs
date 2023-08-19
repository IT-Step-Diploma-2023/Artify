using Artify.Data;
using Artify.Models.DbModels.Users;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class TeamsRepository : IRepository<Team>
    {
        private ApplicationDbContext context;
        public TeamsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Team obj)
        {
            context.Teams.Add(obj);
        }

        public IQueryable<Team> GetAll()
        {
            return context.Teams;
        }

        public Team? GetById(int id)
        {
            return context.Teams.Find(id);
        }

        public IQueryable<Team> Query(Expression<Func<Team, bool>> filter)
        {
            return context.Teams.Where(filter);
        }

        public void Remove(int id)
        {
            Team? team = context.Teams.Find(id);
            if (team != null)
                context.Teams.Remove(team);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Team obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
