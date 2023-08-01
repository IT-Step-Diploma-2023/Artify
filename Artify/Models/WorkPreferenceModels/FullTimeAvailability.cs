using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.Design;


namespace Artify.Models.WorkPreferenceModels
{
    public class FullTimeAvailability
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Місцезнаходження")]
        public string Location { get; set; }

        [Required]
        [Display(Name = "Можливість дистанційної роботи")]
        public int RemoteAvailable { get; set; }

        [Required]
        [Display(Name = "Дизайнер")]
        public int DesignerId { get; set; }

        [Required]
        [Display(Name = "Заробітна плата")]
        public int SalaryId { get; set; }

        [ForeignKey("SalaryId")]
        public virtual Salary Salary { get; set; }

        [ForeignKey("DesignerId")]
        public virtual Designer Designer { get; set; }

        public virtual List<WorkPreference> WorkPreferences { get; set; }

    }
}
