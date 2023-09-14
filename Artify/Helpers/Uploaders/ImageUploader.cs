using System.IO;

namespace Artify.Helpers.Uploaders
{
    public static class ImageUploader
    {
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
                    if (!File.Exists(fileName))
                        break;
                }
                if(fileName == string.Empty)
                    throw new Exception("Wrong length");


                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "uploads", "fullImages", fileName);
                var relativePath = Path.Combine("uploads", "fullImages", fileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await image.CopyToAsync(stream);
                }
                return new ImageUploaderResult { ResultCode = ImageUploaderResultCode.UploadingSuccess, FileName = relativePath };
            }
            catch (ArgumentException) {
                return new ImageUploaderResult { ResultCode = ImageUploaderResultCode.ForbiddenExtension };
            }catch(Exception) {
                return new ImageUploaderResult { ResultCode = ImageUploaderResultCode.UploadingError };
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
            UploadingSuccess,
            ForbiddenExtension,
            UploadingError
        }
    }
}
