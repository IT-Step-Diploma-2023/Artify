using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.Design;
using System.Xml.Linq;
using Artify.Models.Users;

namespace Artify.Models.WorkPreference
{
    public class FreelanceAvailability
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [Column(TypeName = "money")]
        public decimal FixedPrice { get; set; }

        [Column(TypeName = "money")]
        public decimal MinHourlyRate { get; set; }

        public int MinContractHours { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; } = null!;
        public virtual List<WorkPreference> WorkPreferences { get; set; } = new();
    }
}
