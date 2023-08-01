using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Users
{
    public class Employer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int DesignerId { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(DesignerId))]
        public virtual Designer Designer { get; } = null!;
    }
}
