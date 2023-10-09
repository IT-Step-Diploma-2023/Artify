using Artify.Controllers.uploads;
using Artify.Models.DbModels.DbModels.Artworks;
using Image = Artify.Models.DbModels.DbModels.Artworks.Image;

namespace Artify.Controllers.shots.DTO
{
    public class GetSingleShotDTO
    {
        public int id { get; set; }
        public string title { get; set; } = string.Empty;
        public DateTime createdDateTime { get; set; }
        public int creatorId { get; set; }
        public string creatorUsername { get; set; } = string.Empty;
        public string creatorFullName { get; set; } = string.Empty;
        public double price { get; set; }
        public bool isPublic { get; set; }
        public bool isDraft { get; set; }
        public int blocksGap { get; set; }
        public string cover { get; set; } = string.Empty;
        public List<string> images { get; set; } = new List<string>();
        public GetSingleShotDTO(Shot shot)
        {
            id = shot.Id;
            createdDateTime = shot.CreatedDateTime;
            creatorId = shot.UserId;
            creatorUsername = shot.User.Username;
            creatorFullName = shot.User.FullName;
            price = shot.Price;
            isPublic = shot.IsPublic;
            isDraft = shot.IsDraft;
            cover = shot.Cover;
            if (shot.Title != string.Empty)
                title = shot.Title;
            foreach(Image image in shot.Images)
            {
                images.Add(UploadsController.PrepareImagePath(image.ImagePath));
            }
        }
        
        
    }
}
