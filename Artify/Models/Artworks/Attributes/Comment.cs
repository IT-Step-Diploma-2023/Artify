using Artify.Models.Artworks;
using Artify.Models.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Artworks.Attributes
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int DesignerId { get; set; } // Designer is author

        [Required]
        public int ShotId { get; set; } // Shot is subject

        [Required]
        public string Text { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(DesignerId))]
        public virtual Designer Designer { get; set; } = null!;

        [ForeignKey(nameof(ShotId))]
        public virtual Shot Shot { get; set; } = null!;
    }
}
