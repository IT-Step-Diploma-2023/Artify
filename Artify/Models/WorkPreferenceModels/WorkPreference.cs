using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.Design;
using System.Xml.Linq;
using Artify.Models.Users;

namespace Artify.Models.WorkPreferenceModels
{
    public class WorkPreference
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public bool FullTimeAvailable { get; set; }

        [Required]
        public bool FreelanceAvailable { get; set; }

        [Required]
        public string Skills { get; set; } = string.Empty;

        [Required]
        public int UserId { get; set; }

        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; } = new();

        [Required]
        public int FullTimeAvailabilityId { get; set; }

        [ForeignKey(nameof(FullTimeAvailabilityId))]
        public virtual FullTimeAvailability FullTimeAvailability { get; set; } = new();

        [Required]
        public int FreelanceAvailabilityId { get; set; }

        [ForeignKey(nameof(FreelanceAvailabilityId))]
        public virtual FreelanceAvailability FreelanceAvailability { get; set; } = new();

        public virtual List<Education> Educations { get; set; } = new();

        public virtual List<Job> Jobs { get; set; } = new();

        public virtual List<Speciality> Specialities { get; set; } = new();
    }
}
