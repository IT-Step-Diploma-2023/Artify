using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.Users.Attributes
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
        public virtual List<User> Users { get; set; } = null!;
    }
}
