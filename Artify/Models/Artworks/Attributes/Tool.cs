using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Artworks.Attributes
{
    public class Tool
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        public virtual List<Shot> Shots { get; } = null!;
    }
}
