using Artify.Controllers.uploads;
using Artify.Models.DbModels.DbModels.Artworks;
using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using System.Runtime.InteropServices.JavaScript;

namespace Artify.Controllers.shots.DTO
{
    public class GetShotDTO
    {
        public int id { get; set; }
        public string title { get; set; } = string.Empty;
        public DateTime createdDateTime { get; set; }
        public int userId { get; set; }
        public string username { get; set; } = string.Empty;
        public string userFullName { get; set; } = string.Empty;
        public string logoImage { get; set; } = string.Empty;
        public double price { get; set; }
        public bool isPublic { get; set; }
        public bool isDraft { get; set; }
        public int blocksGap { get; set; }
        public string cover { get; set; } = string.Empty;
        public List<string> thumbnailsPaths { get; set; } = new List<string>();
        public int appreciationsCount { get; set; } = 0;
        public bool appreciatedByCurrentUser { get; set; }
        public GetShotDTO(Shot shot, int? currentuserId)
        {
            id = shot.Id;
            createdDateTime = shot.CreatedDateTime;
            userId = shot.UserId;
            username = shot.User.Username;
            userFullName = shot.User.FullName;
            logoImage = shot.User.LogoImage ?? "";
            price = shot.Price;
            isPublic = shot.IsPublic;
            isDraft = shot.IsDraft;
            cover = UploadsController.PrepareImagePath(shot.Cover);
            if (shot.Title != string.Empty)
                title = shot.Title;
            appreciationsCount = shot.Appreciations.Count;
            if (currentuserId != null)
                appreciatedByCurrentUser = shot.Appreciations
                    .Exists(appreciation => appreciation.UserId == currentuserId);
        }
        public GetShotDTO() { }
    }

}
