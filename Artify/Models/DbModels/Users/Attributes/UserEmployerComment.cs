using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Artify.Models.DbModels.Users.Attributes
{
    public class UserEmployerComment
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
        public virtual User User { get; set; } = null!;

        [ForeignKey(nameof(EmployerId))]
        public virtual Employer Employer { get; set; } = null!;
    }
}
