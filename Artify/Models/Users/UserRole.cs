using System.ComponentModel.DataAnnotations;

namespace Artify.Models.Users
{
    public class UserRole
    {
        [Key]
        public int Id { get; set; } = -1;
        public string RoleName { get; set; } = string.Empty;
    }
}
