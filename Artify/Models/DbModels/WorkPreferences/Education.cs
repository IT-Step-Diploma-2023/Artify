using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.WorkPreferences
{
    public class Education
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(100)]
        public string Degree { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Institution { get; set; } = string.Empty;

        [Required]
        [DataType(DataType.Date)]
        public DateTime StartYear { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime FinishYear { get; set; }

        public int WorkPreferenceId { get; set; }

        // NAVIGATION PROPERTIES

        [ForeignKey(nameof(WorkPreferenceId))]
        public virtual WorkPreference WorkPreference { get; set; } = null!;
    }
}
