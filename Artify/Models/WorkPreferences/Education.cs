using System.ComponentModel.DataAnnotations;

namespace Artify.Models.WorkPreferences
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

        // NAVIGATION PROPERTIES
        public virtual List<WorkPreference> WorkPreferences { get; set; } = new();
    }
}
