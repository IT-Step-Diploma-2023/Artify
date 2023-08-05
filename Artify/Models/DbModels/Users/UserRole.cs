using System.ComponentModel.DataAnnotations;

namespace Artify.Models.DbModels.Users
{
    public class UserRole
    {
        [Key]
        public int Id { get; set; } = -1;
        [Required]
        public string RoleName { get; set; } = string.Empty;
        [Required]
        public int InheritedRoleId { get; set; }

        // NAVIGATION PROPERTIES
        public virtual List<User> Users { get; set; } = new();
        public virtual List<Permission> Permissions { get; set; } = new();
    }
}
