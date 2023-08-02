using Artify.Models.Artworks;
using Artify.Models.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Artworks.Attributes
{
    public class ShotComment : Appreciation
    {
        [Required]
        public string Text { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
    }
}
