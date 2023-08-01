using Artify.Models.Artworks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Users.Attributes
{
    public class Follower
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int DesignerId { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(DesignerId))]
        public virtual Designer Designer { get; set; } = null!;

    }
}
