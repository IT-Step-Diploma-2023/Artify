using System.ComponentModel.DataAnnotations;

namespace Artify.Models.Users
{
    public class UserRole
    {
        [Key]
        public int Id { get; set; } = -1;
        [Required]
        public string RoleName { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        public virtual List<User>? Users { get; set; }
    }
}
