using Artify.Controllers.uploads;
using Artify.Models.DbModels.DbModels.Artworks;
using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using Image = Artify.Models.DbModels.DbModels.Artworks.Image;



namespace Artify.Controllers.shots.DTO
{
    public class GetSingleShotDTO
    {
        public int id { get; set; }
        public string title { get; set; } = string.Empty;
        public string description { get; set; } = string.Empty;
        public DateTime createdDateTime { get; set; }
        public int authorId { get; set; }
        public string authorUsername { get; set; } = string.Empty;
        public string authorFullName { get; set; } = string.Empty;
        public string authorLogoImage { get; set; } = string.Empty;
        public double price { get; set; }
        public bool isPublic { get; set; }
        public bool isDraft { get; set; }
        public int blocksGap { get; set; }
        public string cover { get; set; } = string.Empty;
        public bool appreciatedByCurrentUser { get; set; } = false;
        public List<string> images { get; set; } = new ();
        public List<string> tags { get; set; } = new ();
        public List<AppreciationDTO> appreciations { get; set; } = new ();

        public GetSingleShotDTO(Shot shot, int? currentuserId)
        {
            id = shot.Id;
            title = shot.Title;
            description = shot.Description;
            createdDateTime = shot.CreatedDateTime;
            authorId = shot.UserId;
            authorUsername = shot.User.Username;
            authorFullName = shot.User.FullName;
            authorLogoImage = shot.User.LogoImage ?? "";
            price = shot.Price;
            isPublic = shot.IsPublic;
            isDraft = shot.IsDraft;
            cover = UploadsController.PrepareImagePath(shot.Cover);
            if (shot.Title != string.Empty)
                title = shot.Title;
            foreach (var image in shot.Images)
            {
                images.Add(UploadsController.PrepareImagePath(image.ImagePath));
            }
            blocksGap = shot.BlocksGap;
            foreach (var appreciation in shot.Appreciations)
            {
                var appreciationDTO = new AppreciationDTO(appreciation);

                appreciations.Add(appreciationDTO);
                if (currentuserId != null && appreciation.UserId == currentuserId) 
                    appreciatedByCurrentUser = true;
            }
            foreach (var tag in shot.Tags)
            {
                tags.Add(tag.Name);
            }
        }
    }
}
