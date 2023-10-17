using Artify.Models.DbModels.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.DbModels.Artworks
{
    public class Project
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; } // UserDTO created Follower
        [Required]
        public string Title { get; set; } = string.Empty;

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime CreatedDateTime { get; set; }

        public string Description { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; } = null!;
        public virtual List<Shot> Shots { get; set; } = new();
    }
}
