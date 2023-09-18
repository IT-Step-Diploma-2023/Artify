using Artify.Models.DbModels.DbModels.Artworks;

namespace Artify.Controllers.shots.DTO
{
    public class GetShotDTO
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public DateTime CreatedDateTime { get; set; }
        public int UserId { get; set; }
        public List<string> thumbnailsPaths { get; set; } = new List<string>();
        public GetShotDTO(Shot shot)
        {
            Id = shot.Id;
            CreatedDateTime = shot.CreatedDateTime;
            UserId = shot.UserId;
            if (shot.Title != string.Empty)
                Title = shot.Title;
        }
        public GetShotDTO() { }
    }

}
