using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;

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
        [Route("api/[controller]/{*parameters}")]
        public IActionResult GetImage(string parameters)
        {
            try
            {
                string[] paramArray = parameters.Split('/');
                string path = Path.Combine(Directory.GetCurrentDirectory(), "uploads");
                foreach (string param in paramArray)
                {
                    if (!Regex.IsMatch(param, "^[a-zA-Z0-9_.() -]+$"))
                        return BadRequest("Wrong path");
                    path = Path.Combine(path, param);
                }

                if(!System.IO.File.Exists(path))
                    return NotFound();

                return base.PhysicalFile(path, "image/jpeg");
            }catch(Exception)
            {
                return NotFound();
            }
        }
        
        /// <summary>
        /// Converts relative path from database to web path
        /// </summary>
        /// <param name="relativePath">Path from database</param>
        /// <returns>Web link</returns>
        [NonAction]
        public static string PrepareImagePath(string relativePath)
        {
            
            return "api/"+relativePath.Replace("\\", "/");
        }
    }
}
