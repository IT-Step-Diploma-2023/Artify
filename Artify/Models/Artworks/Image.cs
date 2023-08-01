using Artify.Models.Users;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Artworks
{
    public class Image
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "money")]
        public decimal? Price { get; set; }

        [Required]
        public int ShotId { get; set; }

        [Required]
        public DateTime CreatedDateTime { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(ShotId))]
        public virtual Shot Shot { get; set; } = null!;
    }
}
