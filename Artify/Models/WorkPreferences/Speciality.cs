using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;

namespace Artify.Models.WorkPreferences
{
    public class Speciality
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(256)]
        public string Name { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        public virtual List<WorkPreference> WorkPreferences { get; set; } = new();
        public virtual List<Vacancy> Vacancy { get; set; } = new();
    }
}
