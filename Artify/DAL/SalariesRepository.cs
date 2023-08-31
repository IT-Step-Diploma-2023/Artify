using Artify.Data;
using Artify.Models.DbModels.WorkPreferences;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class SalariesRepository : IRepository<Salary>
    {
        private ApplicationDbContext context;
        public SalariesRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Salary obj)
        {
            context.Salaries.Add(obj);
        }

        public IQueryable<Salary> GetAll()
        {
            return context.Salaries;
        }

        public Salary? GetById(int id)
        {
            return context.Salaries.Find(id);
        }

        public IQueryable<Salary> Query(Expression<Func<Salary, bool>> filter)
        {
            return context.Salaries.Where(filter);
        }

        public void Remove(int id)
        {
            Salary? salary = context.Salaries.Find(id);
            if (salary != null)
                context.Salaries.Remove(salary);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async Task<int> SaveAsync()
        {
            return await context.SaveChangesAsync();
        }

        public void Update(Salary obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
