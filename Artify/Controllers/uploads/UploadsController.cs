using Microsoft.AspNetCore.Mvc;

namespace Artify.Controllers.uploads
{
    public class UploadsController : ControllerBase
    {
        public static readonly string imagesRootDirectory = "uploads";
        public static readonly string imagesRootDirectoryFullPath = Path.Combine(Directory.GetCurrentDirectory(), "uploads");
        public static readonly string originalFolderName = "originals";
        public static readonly string thumbnailsFolderName = "thumbnails";
        //public static readonly string originalImagesFolderFullPath = Path.Combine(Directory.GetCurrentDirectory(), "uploads", "fullImages");
        //public static readonly string originalImagesFolderRelativePath = Path.Combine("uploads", "fullImages");
        //public static readonly string compressedImagesFolderFullPath = Path.Combine(Directory.GetCurrentDirectory(), "uploads", "thumbnails");
        //public static readonly string compressedImagesFolderRelativePath = Path.Combine("uploads", "thumbnails");

        [HttpGet]
        [Route("api/[controller]/[action]/{fileDirectory}/{fileName}")]
        public IActionResult GetImage(string fileDirectory, string fileName)
        {
            return Ok("OK");
            //return base.File()
        }
        
        /// <summary>
        /// Converts relative path from database to web path
        /// </summary>
        /// <param name="relativePath">Path from database</param>
        /// <returns>Web link</returns>
        [NonAction]
        public static string PrepareImagePath(string relativePath)
        {
            Path.GetFileName(relativePath);
            Path.GetDirectoryName(relativePath);
            return "http://"+relativePath;
        }
    }
}
