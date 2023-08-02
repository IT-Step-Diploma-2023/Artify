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
        [Display(Name = "Фіксована ціна")]
        public decimal FixedPrice { get; set; }

        [Required]
        [Display(Name = "Мінімальна погодинна ставка")]
        public decimal MinHourlyRate { get; set; }

        [Required]
        [Display(Name = "Мінімальна кількість годин")]
        public int MinContractHours { get; set; }

        [Required]
        [Display(Name = "Користувач")]
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }

        public virtual List<WorkPreference> WorkPreferences { get; set; }
    }
}
