using System.ComponentModel.DataAnnotations;

namespace Artify.Models.DbModels.Users
{
    public class Team : User
    {
        // NAVIGATION PROPERTY
        public virtual List<User> Users { get; set; } = new();
    }
}
