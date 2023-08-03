using Artify.Models.Artworks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Users.Attributes
{
    public class Billing
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string CardNumber { get; set; } = string.Empty;

        [Required]
        public string CardHolderName { get; set; } = string.Empty;

        [Required]
        public DateTime CardExp { get; set; }

        [Required]
        public string CardCVV { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        [NotMapped]
        public virtual List<User> Users { get; } = null!;
    }
}
