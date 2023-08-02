using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.WorkPreference
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

        public virtual List<WorkPreference> WorkPreferences { get; set; } = new();
    }
}
