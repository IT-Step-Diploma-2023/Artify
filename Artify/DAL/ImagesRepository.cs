using Artify.Data;
using Artify.Models.Artworks;
using System.Linq.Expressions;

namespace Artify.DAL
{
    public class ImagesRepository : IRepository<Image>
    {
        private ApplicationDbContext context;
        public ImagesRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void Add(Image obj)
        {
            context.Images.Add(obj);
        }

        public IQueryable<Image> GetAll()
        {
            return context.Images;
        }

        public Image? GetById(int id)
        {
            return context.Images.Find(id);
        }

        public IQueryable<Image> Query(Expression<Func<Image, bool>> filter)
        {
            return context.Images.Where(filter);
        }

        public void Remove(int id)
        {
            Image? image = context.Images.Find(id);
            if (image != null)
                context.Images.Remove(image);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public async void SaveAsync()
        {
            await context.SaveChangesAsync();
        }

        public void Update(Image obj)
        {
            context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}
