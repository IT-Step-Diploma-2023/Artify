using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Artify.Models.DbModels.WorkPreferences
{
    public class Salary
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "money")]
        public decimal MinSalary { get; set; }

        [Required]
        [Column(TypeName = "money")]
        public decimal MaxSalary { get; set; }

        // NAVIGATION PROPERTIES
        public virtual List<FullTimeAvailability> FullTimeAvailabilities { get; set; } = new();
    }
}
