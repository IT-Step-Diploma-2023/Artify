using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.WorkPreferenceModels
{
    public class Job
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(256)]
        [Display(Name = "Посада")]
        public string Position { get; set; }

        [Required]
        [MaxLength(100)]
        [Display(Name = "Назва компанії")]
        public string Company { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Працював(ла) з")]
        public DateTime StartYear { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Працював(ла) по")]
        public DateTime FinishYear { get; set; }

        public virtual List<WorkPreference> WorkPreferences { get; set; }
    }
}
