using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.Design;
using System.Xml.Linq;
using Artify.Models.DbModels.Users;

namespace Artify.Models.DbModels.WorkPreferences
{
    public class FreelanceAvailability
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int WorkPreferenceId { get; set; }

        [Column(TypeName = "money")]
        public decimal FixedPrice { get; set; }

        [Column(TypeName = "money")]
        public decimal MinHourlyRate { get; set; }

        public int MinContractHours { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(WorkPreferenceId))]
        public virtual WorkPreference WorkPreference { get; set; } = null!;
    }
}
