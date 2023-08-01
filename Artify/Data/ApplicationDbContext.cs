using Microsoft.EntityFrameworkCore;
using Artify.Models.Users;
using System.Security.Claims;
using Artify.Models.Artworks;

namespace Artify.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        { }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Image>().Property(si=>si.Price).HasPrecision(18, 2);
            base.OnModelCreating(modelBuilder);
        }
    }
}
