using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Artify.Models.DbModels.Users;

namespace Artify.Models.DbModels.WorkPreferences
{
    public class WorkPreference
    {
        [Key]
        public int Id { get; set; }
       
        public string Skills { get; set; } = string.Empty;

        [Required]
        public int UserId { get; set; }

        public int? FullTimeAvailabilityId { get; set; }

        public int? FreelanceAvailabilityId { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; } = new();

        [ForeignKey(nameof(FullTimeAvailabilityId))]
        public virtual FullTimeAvailability FullTimeAvailability { get; set; } = new();

        [ForeignKey(nameof(FreelanceAvailabilityId))]
        public virtual FreelanceAvailability FreelanceAvailability { get; set; } = new();
        public virtual List<Education> Educations { get; set; } = new();
        public virtual List<Job> Jobs { get; set; } = new();
        public virtual List<Speciality> Specialities { get; set; } = new();
    }
}
