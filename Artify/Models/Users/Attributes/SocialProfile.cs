using Artify.Models.Artworks;
using System.ComponentModel.DataAnnotations;

namespace Artify.Models.Users.Attributes
{
    public class SocialProfile
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        public virtual List<UserSocialProfile> UserSocialProfiles { get; } = new ();
    }
}
