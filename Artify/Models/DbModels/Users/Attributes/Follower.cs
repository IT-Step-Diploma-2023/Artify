using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.Users.Attributes
{
    public class Follower
    {
        [Key]
        public int Id { get; set; }

        // NAVIGATION PROPERTIES
        public virtual List<User> Users { get; set; } = new();

    }
}
