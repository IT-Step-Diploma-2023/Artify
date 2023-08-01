using System.ComponentModel.DataAnnotations;

namespace Artify.Models.Artworks
{
    public class Project : Album
    {
        [Required]
        public string Description { get; set; } = string.Empty;
    }
}
