using Artify.Data;
using Artify.Models.DbModels.Users.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class VacanciesRepository : IRepository<Vacancy>
    {
        private ApplicationDbContext context;
        public VacanciesRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Vacancy obj)
        {
            context.Vacancies.Add(obj);
        }

        public IQueryable<Vacancy> GetAll()
        {
            return context.Vacancies;
        }

        public Vacancy? GetById(int id)
        {
            return context.Vacancies.Find(id);
        }

        public IQueryable<Vacancy> Query(Expression<Func<Vacancy, bool>> filter)
        {
            return context.Vacancies.Where(filter);
        }

        public void Remove(int id)
        {
            Vacancy? vacancy = context.Vacancies.Find(id);
            if (vacancy != null)
                context.Vacancies.Remove(vacancy);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Vacancy obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
