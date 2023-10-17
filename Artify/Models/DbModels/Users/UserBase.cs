using Artify.Models.DbModels.DbModels.Artworks;
using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using Artify.Models.DbModels.Users.Attributes;
using Artify.Models.DbModels.WorkPreferences;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.Users
{
    public class UserBase
    {
        public virtual List<Album> Albums { get; set; } = new();
        public virtual List<Appreciation> Appreciations { get; set; } = new();
        public virtual List<Billing> Billings { get; set; } = null!;
        public string? Biography { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public virtual List<Follower> Followers { get; set; } = new();
        public string FullName { get; set; } = string.Empty;
        [Key]
        public int Id { get; set; }
        public string? Info { get; set; } = string.Empty;
        //
        public string? Location { get; set; } = string.Empty;
        public string? LogoImage { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public virtual List<Project> Projects { get; set; } = new();
        public int RoleId { get; set; }
        public virtual List<Shot> Shots { get; set; } = new();
        public virtual List<Team> Teams { get; set; } = new();
        public virtual List<UserEmployerComment> UserEmployerComments { get; set; } = new();
        public string Username { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(RoleId))]
        public virtual UserRole UserRole { get; set; } = null!;
        public virtual List<UserSocialProfile> UserSocialProfiles { get; set; } = new();
        public string? WebSite { get; set; } = string.Empty;
        public virtual WorkPreference? WorkPreference { get; set; }
    }
}