using Artify.Models.Artworks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Users.Attributes
{
    public class UserFollower
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; } // Tracked user

        [Required]
        public int FollowerId { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(UserId))]
        [NotMapped]
        public virtual User User { get; set; } = null!;

        [ForeignKey(nameof(FollowerId))]
        [NotMapped]
        public virtual User Follower { get; set; } = null!;

    }
}
