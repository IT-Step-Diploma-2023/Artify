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
        public int EmployerId { get; set; } // Shot is subject

        [Required]
        public string Text { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(EmployerId))]
        public virtual Employer Employer { get; set; } = null!;

        [ForeignKey(nameof(ShotId))]
        public virtual Shot Shot { get; set; } = null!;
    }
}
