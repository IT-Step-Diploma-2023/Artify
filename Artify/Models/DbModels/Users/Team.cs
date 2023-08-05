using Artify.Models.DbModels.Users.Attributes;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.Users
{
    public class Team
    {
        [Key] 
        public int Id { get; set; }
        [Required]
        public int UserId { get; set; }
        // NAVIGATION PROPERTY

        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; } = null!;
        public virtual List<TeamMember> TeamMembers { get; set; } = new();
    }
}
