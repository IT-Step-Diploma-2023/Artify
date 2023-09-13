using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.Users.Attributes
{
    public class Employer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; } // UserDTO who is Employer

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; } = null!;
        public virtual List<UserEmployerComment> UserEmployerComments { get; set; } = new();
        public virtual List<Vacancy> Vacancies { get; set; } = new();
    }
}
