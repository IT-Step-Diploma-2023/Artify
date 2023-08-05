using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.HelperModels
{
    public class UserLogin
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
