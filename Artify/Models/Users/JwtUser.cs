namespace Artify.Models.Users
{
    //User that stores in JwtToken
    public class JwtUser
    {
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public int RoleId { get; set; } = -1;

    }
}
