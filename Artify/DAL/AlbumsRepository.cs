using Artify.Data;
using Artify.Models.Artworks;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class AlbumsRepository : IRepository<Album>
    {
        private ApplicationDbContext context;
        public AlbumsRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Album obj)
        {
            context.Albums.Add(obj);
        }

        public IQueryable<Album> GetAll()
        {
            return context.Albums;
        }

        public Album? GetById(int id)
        {
            return context.Albums.Find(id);
        }

        public IQueryable<Album> Query(Expression<Func<Album, bool>> filter)
        {
            return context.Albums.Where(filter);
        }

        public void Remove(int id)
        {
            Album? album = context.Albums.Find(id);
            if (album != null)
                context.Albums.Remove(album);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Album obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
