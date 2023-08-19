using Artify.Data;
using Artify.Models.DbModels.Users.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class BillingsRepository : IRepository<Billing>
    {
        private ApplicationDbContext context;
        public BillingsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Billing obj)
        {
            context.Billings.Add(obj);
        }

        public IQueryable<Billing> GetAll()
        {
            return context.Billings;
        }

        public Billing? GetById(int id)
        {
            return context.Billings.Find(id);
        }

        public IQueryable<Billing> Query(Expression<Func<Billing, bool>> filter)
        {
            return context.Billings.Where(filter);
        }

        public void Remove(int id)
        {
            Billing? billing = context.Billings.Find(id);
            if (billing != null)
                context.Billings.Remove(billing);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Billing obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
