using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.DbModels.Artworks
{
    public class Image
    {
        [Key]
        public int Id { get; set; }

        //[Required]
        //[Column(TypeName = "money")]
        //public decimal Price { get; set; }

        [Required]
        public int ShotId { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime CreatedDateTime { get; set; } = DateTime.UtcNow;

        [Required]
        public string ImagePath { get; set; } = string.Empty;
        [Required]
        public string ThumbnailFullPath { get; set; } = string.Empty;
        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(ShotId))]
        public virtual Shot Shot { get; set; } = null!;
    }
}
