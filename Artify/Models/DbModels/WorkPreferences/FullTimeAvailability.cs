using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.Design;
using Artify.Models.DbModels.Users;


namespace Artify.Models.DbModels.WorkPreferences
{
    public class FullTimeAvailability
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Location { get; set; } = string.Empty;

        [Required]
        public int RemoteAvailable { get; set; }

        [Required]
        public int WorkPreferenceId { get; set; }

        public int? SalaryId { get; set; }

        [ForeignKey(nameof(SalaryId))]
        public virtual Salary Salary { get; set; } = null!;

        [ForeignKey(nameof(WorkPreferenceId))]
        public virtual WorkPreference WorkPreference { get; set; } = null!;

    }
}
