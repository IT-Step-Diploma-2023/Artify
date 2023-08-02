using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Artify.Models.WorkPreferenceModels
{
    public class Salary
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "Мінімальна заробітна плата")]
        public decimal MinSalary { get; set; }

        [Display(Name = "Максимальна заробітна плата")]
        public decimal MaxSalary { get; set; }

        public virtual List<FullTimeAvailability> FullTimeAvailabilities { get; set; }
    }
}
