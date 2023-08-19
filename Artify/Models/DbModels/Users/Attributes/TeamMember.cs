using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.Users.Attributes
{
    public class TeamMember
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int MemberUserId { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(MemberUserId))]
        public virtual User MemberUser { get; set; } = null!;
        public virtual List<Team> Teams { get; set; } = new();
    }
}
