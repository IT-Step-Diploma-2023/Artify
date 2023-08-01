using Artify.Models.Artworks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Users
{
    public class Follower
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; } = null!;

    }
}
