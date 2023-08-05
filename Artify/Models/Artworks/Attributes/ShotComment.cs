using Artify.Models.Artworks;
using Artify.Models.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Artworks.Attributes
{
    public class ShotComment
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; } // User is author 

        [Required]
        public int ShotId { get; set; } // Shot is subject

        [Required]
        public string Text { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(UserId))]
        public virtual User Author { get; set; } = null!;

        [ForeignKey(nameof(ShotId))]
        public virtual Shot Shot { get; set; } = null!;
    }
}
