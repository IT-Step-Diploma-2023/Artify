using Artify.Models.DbModels.Users;
using System.Text.Json.Serialization;

namespace Artify.Controllers.users.DTO.User
{
    public class BaseDTOUser
    {
        public int Id { get; set; }
        public string? Username { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? FullName { get; set; }
        public string? Email { get; set; }
        public int RoleId { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? Location { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? Info { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? WebSite { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? Biography { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? LogoImage { get; set; }

        public BaseDTOUser(User user)
        {
            fillFields(user);
        }
        public BaseDTOUser() { }
        public void fillFields(User user)
        {
            Id = user.Id;
            Username = user.Username;
            Email = user.Email;
            RoleId = user.RoleId;


            if (IsNotEmpty(user.FullName))
                FullName = user.FullName;
            if (IsNotEmpty(user.Location))
                Location = user.Location;
            if (IsNotEmpty(user.Info))
                Info = user.Info;
            if (IsNotEmpty(user.WebSite))
                WebSite = user.WebSite;
            if (IsNotEmpty(user.Biography))
                Biography = user.Biography;
            if (IsNotEmpty(user.LogoImage))
                LogoImage = user.LogoImage;
        }

        private bool IsNotEmpty(string? value)
        {
            return !string.IsNullOrEmpty(value);
        }
    }
}
