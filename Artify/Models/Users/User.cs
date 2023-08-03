using Artify.Models.Artworks;
using Artify.Models.Artworks.Attributes;
using Artify.Models.Users.Attributes;
using Artify.Models.WorkPreference;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Users
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public int RoleId { get; set; }

        //
        public string Location { get; set; } = string.Empty;
        public string Info { get; set; } = string.Empty;
        public string WebSite { get; set; } = string.Empty;
        public string Biography { get; set; } = string.Empty;
        public string LogoImage { get; set; } = string.Empty;
        public int BillingId { get; set; }

        // NAVIGATION PROPERTIES

        [ForeignKey(nameof(RoleId))]
        public UserRole Role { get; set; } = new();
        public virtual List<Album> Collections { get; } = new();
        public virtual List<Project> Projects { get; } = new();
        public virtual List<Shot> Shots { get; } = new();
        public virtual List<Appreciation> Appreciations { get; } = new();
        public virtual List<UserSocialProfile> SocialProfiles { get; } = new();
        public virtual List<UserFollower> Followers { get; } = new();
        public virtual List<EmployerComment> Comments { get; } = new();
        public virtual List<Billing> Billings { get; } = null!;

        //
        public virtual List<FreelanceAvailability> FreelanceAvailabilities { get; set; } = new();
        public virtual List<FullTimeAvailability> FullTimeAvailabilities { get; set; } = new();
        public virtual List<WorkPreference.WorkPreference> WorkPreferences { get; set; } = new();
        public virtual List<Vacancy> Vacancy { get; set; } = new();

    }

}
