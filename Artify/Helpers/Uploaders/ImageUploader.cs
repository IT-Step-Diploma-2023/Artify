using System.IO;
using Artify.Controllers.uploads;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Jpeg;

namespace Artify.Helpers.Uploaders
{
    public static class ImageUploader
    {

        private static string[] allowedExtension = { ".png", ".jpg", ".gif", ".jpeg" };
        public static async Task<ImageUploaderResult> UploadImage(IFormFile image, string imageSubLinks)
        {
            if (!allowedExtension.Contains(Path.GetExtension(image.FileName)))
                return new ImageUploaderResult { ResultCode = ImageUploaderResultCode.ForbiddenExtension };
            try
            {
                if (image.Length <= 0)
                    throw new ArgumentException("Wrong length");

                //Ensuring that folder is created
                if (!Directory.Exists(Path.Combine(UploadsController.imagesRootDirectoryFullPath, imageSubLinks, UploadsController.originalFolderName)))
                    Directory.CreateDirectory(Path.Combine(UploadsController.imagesRootDirectoryFullPath, imageSubLinks, UploadsController.originalFolderName));



                //Ensuring that image with this name does not exist
                string fileName = string.Empty;
                string fullPath = string.Empty;
                for (int i = 0; i < 20; i++)
                {
                    fileName = $"{Guid.NewGuid()}{Path.GetExtension(image.FileName)}";
                    fullPath = Path.Combine(UploadsController.imagesRootDirectoryFullPath, imageSubLinks, UploadsController.originalFolderName, fileName);

                    if (!File.Exists(fullPath))
                        break;
                }
                if (fileName == string.Empty)
                    throw new Exception("Wrong filename");

                var relativePath = Path.Combine(UploadsController.imagesRootDirectory, imageSubLinks, UploadsController.originalFolderName, fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    await image.CopyToAsync(stream);
                }
                return new ImageUploaderResult { ResultCode = ImageUploaderResultCode.Success, FileName = relativePath };
            }
            catch (ArgumentException)
            {
                return new ImageUploaderResult { ResultCode = ImageUploaderResultCode.ForbiddenExtension };
            }
            catch (Exception)
            {
                return new ImageUploaderResult { ResultCode = ImageUploaderResultCode.Error };
            }

        }

        public static async Task<ImageDeletingResult> DeleteImage(string imageFilePath)
        {
            if (File.Exists(imageFilePath))
            {
                using (FileStream stream = new FileStream(imageFilePath, FileMode.Open))
                {
                    await stream.FlushAsync();
                }
                File.Delete(imageFilePath);
            }
            else
            {
                return new ImageDeletingResult { ResultCode = ImageDeletingResultCode.NotFound };
            }
            return new ImageDeletingResult { ResultCode = ImageDeletingResultCode.Success };
        }

        public static ImageUploaderResult CompressImage(string RelativeImagePath, string imageCategory)
        {
            try
            {
                ImageUploaderResult result;
                using (var image = Image.Load(Path.Combine(Directory.GetCurrentDirectory(), RelativeImagePath)))
                {
                    result = CompressImage(image, imageCategory);
                }
                return result;
            }
            catch (Exception)
            {
                return new ImageUploaderResult()
                {
                    ResultCode = ImageUploaderResultCode.Error,
                };
            }
        }
        public static ImageUploaderResult CompressImage(Image image, string imageSubLinks)
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

                //Ensuring that folder is created
                if (!Directory.Exists(Path.Combine(UploadsController.imagesRootDirectoryFullPath, imageSubLinks, UploadsController.thumbnailsFolderName)))
                    Directory.CreateDirectory(Path.Combine(UploadsController.imagesRootDirectoryFullPath, imageSubLinks, UploadsController.thumbnailsFolderName));


                string fileName = string.Empty;
                string outputPath = string.Empty;
                for (int i = 0; i < 20; i++)
                {
                    fileName = $"{Guid.NewGuid()}{".jpg"}";
                    outputPath = Path.Combine(UploadsController.imagesRootDirectoryFullPath, imageSubLinks, UploadsController.thumbnailsFolderName, fileName);
                    if (!File.Exists(outputPath))
                        break;
                }
                if (fileName == string.Empty || outputPath == string.Empty)
                    throw new Exception("Wrong length");

                // Save the thumbnail
                image.Save(outputPath, new JpegEncoder());

                return new ImageUploaderResult()
                {
                    ResultCode = ImageUploaderResultCode.Success,
                    FileName = Path.Combine(UploadsController.imagesRootDirectory, imageSubLinks, UploadsController.thumbnailsFolderName, fileName)
                };
            }
            catch (Exception)
            {
                return new ImageUploaderResult()
                {
                    ResultCode = ImageUploaderResultCode.Error,
                };
            }
        }
        public async static Task<bool> RemoveImage(string relativeFileName)
        {
            try
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), relativeFileName);
                await Task.Run(() => File.Delete(filePath));
            }
            catch (Exception)
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

        public class ImageDeletingResult {
            public ImageDeletingResultCode ResultCode;
            public string? FileName;
        }

        public enum ImageDeletingResultCode
        {
            Success,
            NotFound,
            Error
        }
    }
}
