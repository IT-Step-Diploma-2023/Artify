using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.Users.Attributes
{
    public class UserSocialProfile
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public int SocialProfileId { get; set; }

        [Required]
        public string Address { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES

        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; } = null!;

        [ForeignKey(nameof(SocialProfileId))]
        public virtual SocialProfile SocialProfile { get; set; } = null!;

    }
}
