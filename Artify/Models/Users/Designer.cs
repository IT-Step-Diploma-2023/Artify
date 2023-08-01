using Artify.Models.Artworks;
using Artify.Models.Artworks.Attributes;
using Artify.Models.Users.Attributes;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Users
{
    public class Designer : User
    {
        public string Location { get; set; } = string.Empty;
        public string Info { get; set; } = string.Empty;
        public string WebSite { get; set; } = string.Empty;
        public string Biography { get; set; } = string.Empty;
        public string LogoImage { get; set; } = string.Empty;
        public int BillingId { get; set; }
        public int EmployerId { get; set; }

        // NAVIGATION PROPERTIES
        public virtual List<Album> ArtworkCollections { get; } = new();
        public virtual List<Project> Projects { get; } = new();
        public virtual List<Shot> Shots { get; } = new();
        public virtual List<Appreciation> Appreciations { get; } = new();
        public virtual List<DesignerSocialProfile> DesignerSocialProfiles { get; } = new();
        public virtual List<DesignerFollower> DesignerFollowers { get; } = new();
        public virtual List<Billing> Billings { get; } = null!;

        [ForeignKey(nameof(EmployerId))]
        public virtual Employer Employer { get; } = null!;




    }
}
