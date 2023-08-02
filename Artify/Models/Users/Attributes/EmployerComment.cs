using Artify.Models.Artworks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Artify.Models.Users.Attributes
{
    public class EmployerComment
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; } // User is author

        [Required]
        public int EmployerId { get; set; } // Employer is subject

        [Required]
        public string Text { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(UserId))]
        public virtual User Author { get; set; } = null!;

        [ForeignKey(nameof(EmployerId))]
        public virtual User Employer { get; set; } = null!;
    }
}
