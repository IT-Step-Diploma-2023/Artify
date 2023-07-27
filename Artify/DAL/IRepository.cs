using System.Linq.Expressions;

namespace Artify.DAL
{
    public interface IRepository<T>
    {
        IQueryable<T> GetAll();
        T? GetById(int id);
        void Add(T obj);
        void Remove(int id);
        void Update(T obj);
        IQueryable<T> Query(Expression<Func<T, bool>> filter);
        void Save();
        void SaveAsync();
    }
}
