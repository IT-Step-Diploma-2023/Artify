using Artify.Models.DbModels.Users;
using System.Text.Json.Serialization;

namespace Artify.Controllers.users.DTO.UserDTO
{
    public class BaseDTOUser
    {
        public int Id { get; set; }
        public string? Username { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? FullName { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public string? Email { get; set; }
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
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

        public BaseDTOUser(User user, bool privateData = false)
        {
            fillFields(user, privateData);
        }
        public BaseDTOUser() { }
        public void fillFields(User user, bool privateData)
        {
            Id = user.Id;
            Username = user.Username;
            if(privateData)
                Email = user.Email;
            if (privateData)
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
