using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace Artify.Models.WorkPreferenceModels
{
    public class Speciality
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(256)]
        [Display(Name = "Спеціальність")]
        public string Name { get; set; }

        public virtual List<WorkPreference> WorkPreferences { get; set; }
    }
}
