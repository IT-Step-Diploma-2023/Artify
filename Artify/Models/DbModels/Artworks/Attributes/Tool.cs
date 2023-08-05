using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Artify.Models.DbModels.DbModels.Artworks;

namespace Artify.Models.DbModels.DbModels.Artworks.Attributes
{
    public class Tool
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        public virtual List<Shot> Shots { get; set; } = null!;
    }
}
