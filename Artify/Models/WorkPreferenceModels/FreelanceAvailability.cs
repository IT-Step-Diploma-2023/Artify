using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.Design;
using System.Xml.Linq;

namespace Artify.Models.WorkPreferenceModels
{
    public class FreelanceAvailability
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Фіксована ціна")]
        public decimal FixedPrice { get; set; }

        [Required]
        [Display(Name = "Мінімальна погодинна ставка")]
        public decimal MinHourlyRate { get; set; }

        [Required]
        [Display(Name = "Мінімальна кількість годин")]
        public int MinContractHours { get; set; }

        [Required]
        [Display(Name = "Дизайнер")]
        public int DesignerId { get; set; }

        [ForeignKey("DesignerId")]
        public virtual Designer Designer { get; set; }

        public virtual List<WorkPreference> WorkPreferences { get; set; }
    }
}
