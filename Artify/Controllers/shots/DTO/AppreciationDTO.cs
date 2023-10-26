using Artify.Models.DbModels.DbModels.Artworks.Attributes;


namespace Artify.Controllers.shots.DTO
{
    public class AppreciationDTO
    {
        public int id { get; set; }
        public int userId { get; set; }
        public int shotId { get; set; }

        public AppreciationDTO(Appreciation appreciation) 
        { 
            id = appreciation.Id; 
            userId = appreciation.UserId;
            shotId= appreciation.ShotId;
        }

    }
}
