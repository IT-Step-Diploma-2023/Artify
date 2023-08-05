using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Artify.Models.DbModels.WorkPreferences;

namespace Artify.Models.DbModels.Users.Attributes
{
    public class Vacancy
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(256)]
        public string Title { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;

        [Required]
        public string Location { get; set; } = string.Empty;

        [Required]
        public int RemoteAvailable { get; set; }

        [Required]
        public string Salary { get; set; } = string.Empty;

        [Required]
        public string EmpType { get; set; } = string.Empty;

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime CreatedDateTime { get; set; }

        public bool InBest { get; set; }

        [Required]
        public int EmployerId { get; set; } // Employer created vacancy

        [Required]
        public int SpecialityId { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(SpecialityId))]
        public virtual Speciality Speciality { get; set; } = new();

        [ForeignKey(nameof(EmployerId))]
        public virtual Employer Employer { get; set; } = new();
    }
}
