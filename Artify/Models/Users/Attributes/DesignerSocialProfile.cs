using Artify.Models.Artworks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Users.Attributes
{
    public class DesignerSocialProfile
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int DesignerId { get; set; }

        [Required]
        public int SocialProfileId { get; set; }

        [Required]
        public string Address { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES

        [ForeignKey(nameof(DesignerId))]
        public virtual Designer Designer { get; set; } = null!;

        [ForeignKey(nameof(SocialProfileId))]
        public virtual SocialProfile SocialProfile { get; set; } = null!;

    }
}
