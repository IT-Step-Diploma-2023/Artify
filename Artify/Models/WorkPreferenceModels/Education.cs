using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace Artify.Models.WorkPreferenceModels
{
    public class Education
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(100)]
        [Display(Name = "Ступінь")]
        public string Degree { get; set; }

        [Required]
        [MaxLength(100)]
        [Display(Name = "Навчальний заклад")]
        public string Institution { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Рік початку навчання")]
        public DateTime StartYear { get; set; } //????

        [Required]
        [DataType(DataType.Date)]
        [Display(Name = "Рік завершення навчання")]
        public DateTime FinishYear { get; set; }//???

        public virtual List<WorkPreference> WorkPreferences { get; set; }
    }
}
