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

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; } = null!;
        public virtual List<Education>? Educations { get; set; }
        public virtual List<Job>? Jobs { get; set; }
        public virtual List<Speciality>? Specialities { get; set; }
        public virtual FullTimeAvailability? FullTimeAvailability { get; set; }
        public virtual FreelanceAvailability? FreelanceAvailability { get; set; }

    }
}
