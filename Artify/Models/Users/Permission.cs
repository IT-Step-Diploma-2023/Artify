namespace Artify.Models.Users
{
    public class Permission
    {
        public int Id { get; set; }
        public string Tag { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        public virtual List<UserRole> Roles { get; set; } = new();
    }
}
