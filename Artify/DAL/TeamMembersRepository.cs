using Artify.Data;
using Artify.Models.DbModels.Users.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class TeamMembersRepository : IRepository<TeamMember>
    {
        private ApplicationDbContext context;
        public TeamMembersRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(TeamMember obj)
        {
            context.TeamMembers.Add(obj);
        }

        public IQueryable<TeamMember> GetAll()
        {
            return context.TeamMembers;
        }

        public TeamMember? GetById(int id)
        {
            return context.TeamMembers.Find(id);
        }

        public IQueryable<TeamMember> Query(Expression<Func<TeamMember, bool>> filter)
        {
            return context.TeamMembers.Where(filter);
        }

        public void Remove(int id)
        {
            TeamMember? member = context.TeamMembers.Find(id);
            if (member != null)
                context.TeamMembers.Remove(member);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(TeamMember obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
