using Artify.Models.DbModels.DbModels.Artworks;

namespace Artify.Controllers.shots.DTO
{
    public class GetShotDTO
    {
        public int id { get; set; }
        public string title { get; set; } = string.Empty;
        public DateTime createdDateTime { get; set; }
        public int userId { get; set; }
        public string username { get; set; }
        public string userFullName { get; set; }
        public double price { get; set; }
        public bool isPublic { get; set; }
        public bool isDraft { get; set; }
        public int blocksGap { get; set; }
        public string cover { get; set; }
        public List<string> thumbnailsPaths { get; set; } = new List<string>();
        public GetShotDTO(Shot shot)
        {
            id = shot.Id;
            createdDateTime = shot.CreatedDateTime;
            userId = shot.UserId;
            username = shot.User.Username;
            userFullName = shot.User.FullName;
            price = shot.Price;
            isPublic = shot.IsPublic;
            isDraft = shot.IsDraft;
            cover = shot.Cover;
            if (shot.Title != string.Empty)
                title = shot.Title;
        }
        public GetShotDTO() { }
    }

}
