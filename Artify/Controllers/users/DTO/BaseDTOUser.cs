using Artify.Models.DbModels.Users;
using System.Text.Json.Serialization;

namespace Artify.Controllers.users.DTO
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
            this.Id = user.Id;
            this.Username = user.Username;
            this.Email = user.Email;
            this.RoleId = user.RoleId;


            if (IsNotEmpty(user.FullName))
                this.FullName = user.FullName;
            if (IsNotEmpty(user.Location))
                this.Location = user.Location;
            if (IsNotEmpty(user.Info))
                this.Info = user.Info;
            if (IsNotEmpty(user.WebSite))
                this.WebSite = user.WebSite;
            if (IsNotEmpty(user.Biography))
                this.Biography = user.Biography;
            if (IsNotEmpty(user.LogoImage))
                this.LogoImage = user.LogoImage;
        }

        private bool IsNotEmpty(string? value)
        {
            return !string.IsNullOrEmpty(value);
        }
    }
}
