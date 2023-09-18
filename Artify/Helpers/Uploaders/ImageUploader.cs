using System.IO;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Jpeg;

namespace Artify.Helpers.Uploaders
{
    public static class ImageUploader
    {
        private static readonly string originalImagesFolderFullPath = Path.Combine(Directory.GetCurrentDirectory(), "uploads", "fullImages");
        private static readonly string originalImagesFolderRelativePath = Path.Combine("uploads", "fullImages");
        private static readonly string compressedImagesFolderFullPath = Path.Combine(Directory.GetCurrentDirectory(), "uploads", "thumbnails");
        private static readonly string compressedImagesFolderRelativePath = Path.Combine( "uploads", "thumbnails");
        private static string[] allowedExtension = { ".png",".jpg",".gif",".jpeg" };
        public static async Task<ImageUploaderResult> UploadImage(IFormFile image)
        {
            if (!allowedExtension.Contains(Path.GetExtension(image.FileName)))
                return new ImageUploaderResult { ResultCode = ImageUploaderResultCode.ForbiddenExtension };
            try
            {
                if (image.Length <= 0)
                    throw new ArgumentException("Wrong length");

                //Ensuring that image with this name does not exist
                string fileName = string.Empty;
                for (int i=0; i < 20; i++)
                {
                    fileName = $"{Guid.NewGuid()}{Path.GetExtension(image.FileName)}";
                    if (!File.Exists(Path.Combine(originalImagesFolderFullPath, fileName)))
                        break;
                }
                if(fileName == string.Empty)
                    throw new Exception("Wrong filename");


                var filePath = Path.Combine(originalImagesFolderFullPath, fileName);
                var relativePath = Path.Combine(originalImagesFolderRelativePath, fileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await image.CopyToAsync(stream);
                }
                return new ImageUploaderResult { ResultCode = ImageUploaderResultCode.Success, FileName = relativePath };
            }
            catch (ArgumentException) {
                return new ImageUploaderResult { ResultCode = ImageUploaderResultCode.ForbiddenExtension };
            }catch(Exception) {
                return new ImageUploaderResult { ResultCode = ImageUploaderResultCode.Error };
            }
            
        }
        
        public static ImageUploaderResult CompressImage(string RelativeImagePath)
        {
            try
            {
                ImageUploaderResult result;
                using (var image = Image.Load(Path.Combine(Directory.GetCurrentDirectory(), RelativeImagePath)))
                {
                    result = CompressImage(image);
                }
                return result;
            }catch (Exception)
            {
                return new ImageUploaderResult()
                {
                    ResultCode = ImageUploaderResultCode.Error,
                };
            }
        }
        public static ImageUploaderResult CompressImage(Image image)
        {
            try
            {
                int newWidth, newHeight;
                if (image.Width > image.Height)
                {
                    newWidth = 512;
                    newHeight = (int)((512.0 / image.Width) * image.Height);
                }
                else
                {
                    newHeight = 512;
                    newWidth = (int)((512.0 / image.Height) * image.Width);
                }
                image.Mutate(x => x
                .Resize(newWidth, newHeight));

                string fileName = string.Empty;
                for (int i = 0; i < 20; i++)
                {
                    fileName = $"{Guid.NewGuid()}{".jpg"}";
                    if (!File.Exists(Path.Combine(compressedImagesFolderFullPath, fileName)))
                        break;
                }
                if (fileName == string.Empty)
                    throw new Exception("Wrong length");

                string outputPath = Path.Combine(compressedImagesFolderFullPath, fileName);
                // Save the thumbnail
                image.Save(outputPath, new JpegEncoder());

                return new ImageUploaderResult()
                {
                    ResultCode = ImageUploaderResultCode.Success,
                    FileName = Path.Combine(compressedImagesFolderRelativePath, fileName)
                };
            }catch(Exception) {
                return new ImageUploaderResult()
                {
                    ResultCode = ImageUploaderResultCode.Error,
                };
            }    
        }
        public async static Task<bool> removeImage(string relativeFileName)
        {
            try
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), relativeFileName);
                await Task.Run(() => File.Delete(filePath));
            }catch(Exception)
            {
                return false;
            }
            return true;
        }
        public class ImageUploaderResult
        {
            public ImageUploaderResultCode ResultCode;
            public string? FileName;
        }
        public enum ImageUploaderResultCode
        {
            Success,
            ForbiddenExtension,
            Error
        }
    }
}
