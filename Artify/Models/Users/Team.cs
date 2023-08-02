using System.ComponentModel.DataAnnotations;

namespace Artify.Models.Users
{
    public class Team : User
    {
        public virtual List<User> Users { get; set; } = new();
    }
}
