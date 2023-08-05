using Artify.Data;
using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class GenresRepository : IRepository<Genre>
    {
        private ApplicationDbContext context;
        public GenresRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Genre obj)
        {
            context.Genres.Add(obj);
        }

        public IQueryable<Genre> GetAll()
        {
            return context.Genres;
        }

        public Genre? GetById(int id)
        {
            return context.Genres.Find(id);
        }

        public IQueryable<Genre> Query(Expression<Func<Genre, bool>> filter)
        {
            return context.Genres.Where(filter);
        }

        public void Remove(int id)
        {
            Genre? genre = context.Genres.Find(id);
            if (genre != null)
                context.Genres.Remove(genre);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Genre obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
