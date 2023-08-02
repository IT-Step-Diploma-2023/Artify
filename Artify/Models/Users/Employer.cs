using Artify.Models.WorkPreferenceModels;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Users
{
    public class Employer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; } = null!;

        public virtual List<Vacancy> Vacancy { get; set; } //додала
    }
}
