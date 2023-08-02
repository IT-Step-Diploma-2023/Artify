using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.Design;
using System.Xml.Linq;
using Artify.Models.Users;

namespace Artify.Models.WorkPreference
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
        public string empType { get; set; } = string.Empty;

        [Required]
        public DateTime CreatedDateTime { get; set; }

        public bool InBest { get; set; }

        [Required]
        public int EmployerId { get; set; }

        [Required]
        public int SpecialityId { get; set; }

        [ForeignKey(nameof(SpecialityId))]
        public virtual Speciality Speciality { get; set; } = new();

        [ForeignKey(nameof(EmployerId))]
        public virtual User Employer { get; set; } = new();


    }
}
