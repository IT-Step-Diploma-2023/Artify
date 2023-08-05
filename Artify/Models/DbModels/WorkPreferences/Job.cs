using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.WorkPreferences
{
    public class Job
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(256)]
        public string Position { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Company { get; set; } = string.Empty;

        [Required]
        [DataType(DataType.Date)]
        public DateTime StartYear { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime FinishYear { get; set; }

        [Required]
        public int WorkPreferenceId { get; set; }

        // NAVIGATING PROPERTIES
        [ForeignKey(nameof(WorkPreferenceId))]
        public virtual WorkPreference WorkPreference { get; set; } = null!;
    }
}
