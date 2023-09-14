namespace Artify.Controllers.shots.DTO
{
    public class ShotUploadDTO
    {
        public string? title { get; set; }
        public string? createDateTime { get; set; }
        public List<string>? genres { get; set; }
        public List<string>? tags { get; set; }
        public List<ShoutUploadDTO_Image>? images { get; set; }
    }
    public class ShoutUploadDTO_Image
    {
        public string? filename { get; set; }
        public double? price { get; set; }
    }
}
