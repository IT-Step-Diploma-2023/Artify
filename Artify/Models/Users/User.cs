using Artify.Models.Artworks;
using Artify.Models.Artworks.Attributes;
using Artify.Models.Users.Attributes;
using Artify.Models.WorkPreferenceModels;
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
        public int EmployerId { get; set; }

        // NAVIGATION PROPERTIES

        [ForeignKey(nameof(RoleId))]
        public UserRole Role { get; set; } = new();
        public virtual List<Album> ArtworkCollections { get; } = new();
        public virtual List<Project> Projects { get; } = new();
        public virtual List<Shot> Shots { get; } = new();
        public virtual List<Appreciation> Appreciations { get; } = new();
        public virtual List<UserSocialProfile> UserSocialProfiles { get; } = new();
        public virtual List<UserFollower> UserFollowers { get; } = new();
        public virtual List<Billing> Billings { get; } = null!;
        public virtual List<Vacancy> Vacancy { get; set; } ///додала ось це

        [ForeignKey(nameof(EmployerId))]
        public virtual Employer Employer { get; } = null!;


    }
}
