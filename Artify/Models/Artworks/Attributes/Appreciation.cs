using Artify.Models.Artworks;
using Artify.Models.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Artworks.Attributes
{
    public class Appreciation
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int DesignerId { get; set; }

        [Required]
        public int ShotId { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(ShotId))]
        public virtual Shot Shot { get; set; } = null!;

        [ForeignKey(nameof(DesignerId))]
        public virtual Designer Designer { get; set; } = null!;
    }
}
