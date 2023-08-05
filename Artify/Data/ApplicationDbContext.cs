using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Artify.Models.DbModels.WorkPreferences;
using Artify.Models.DbModels.DbModels.Artworks;
using Artify.Models.DbModels.Users;
using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using Artify.Models.DbModels.Users.Attributes;
using Microsoft.Extensions.Hosting;

namespace Artify.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        { }

        #region DbSets

        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<TeamMember> TeamMembers { get; set; }
        public DbSet<Appreciation> Appreciations { get; set; }
        public DbSet<ShotComment> ShotComments { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Tool> Tools { get; set; }
        public DbSet<Album> Albums { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Shot> Shots { get; set; }
        public DbSet<Billing> Billings { get; set; }
        public DbSet<Employer> Employers { get; set; }
        public DbSet<UserEmployerComment> UserEmployerComments { get; set; }
        public DbSet<SocialProfile> SocialProfiles { get; set; }
        public DbSet<Follower> Followers { get; set; }
        public DbSet<UserSocialProfile> UserSocialProfiles { get; set; }
        public DbSet<Permission> Permissions { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<FreelanceAvailability> FreelanceAvailabilities { get; set; }
        public DbSet<FullTimeAvailability> FullTimeAvailabilities { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Salary> Salaries { get; set; }
        public DbSet<Speciality> Specialities { get; set; }
        public DbSet<Vacancy> Vacancies { get; set; }
        public DbSet<WorkPreference> WorkPreferences { get; set; }

        #endregion


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Image>().Property(si => si.Price).HasPrecision(18, 2);

            modelBuilder.Entity<Salary>().Property(s => s.MinSalary).HasPrecision(18, 2);
            modelBuilder.Entity<Salary>().Property(s => s.MaxSalary).HasPrecision(18, 2);

            modelBuilder.Entity<FreelanceAvailability>().Property(fa => fa.FixedPrice).HasPrecision(18, 2);
            modelBuilder.Entity<FreelanceAvailability>().Property(fa => fa.MinHourlyRate).HasPrecision(18, 2);

            base.OnModelCreating(modelBuilder);
        }
    }
}
