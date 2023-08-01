using System.ComponentModel.DataAnnotations;

namespace Artify.Models.Artworks.Attributes
{
    public class Genre
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        public virtual List<Shot> Shots { get; } = null!;
    }
}
