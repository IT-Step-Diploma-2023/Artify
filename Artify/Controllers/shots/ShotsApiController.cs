﻿using Artify.Controllers.shots.DTO;
using Artify.DAL;
using Artify.Helpers.Uploaders;
using Artify.Models.DbModels.DbModels.Artworks;
using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using Artify.Models.HelperModels;
using Artify.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using static Artify.Helpers.Uploaders.ImageUploader;

namespace Artify.Controllers.shots
{
    [ApiController]
    public class ShotsApiController : ControllerBase
    {
        private ShotsRepository _shotsRepository;
        private GenresRepository _genresRepository;
        private TagsRepository _tagsRepository;
        public ShotsApiController(IRepository<Shot> shotsRepository, IRepository<Genre> genresRepository, IRepository<Tag> tagsRepository)
        {
            _shotsRepository = (ShotsRepository)shotsRepository;
            _genresRepository = (GenresRepository)genresRepository;
            _tagsRepository = (TagsRepository)tagsRepository;
        }
        /// <summary>
        /// UploadShot used to upload shot with related images,
        /// Multiple images can be uploaded,
        /// To every image price must be provided
        /// </summary>
        /// <param name="images">Images to upload</param>
        /// <param name="value">Necessary JSON data</param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/[controller]/[action]")]
        [Authorize]
        public async Task<IActionResult> UploadShot([FromForm] List<IFormFile> images, [FromForm] string value)
        {
            JwtUser? jwtUser = UsersService.GetCurrentUser(this.HttpContext);
            if (jwtUser == null)
                return Forbid();
            ShotUploadDTO? inputJson;
            string returnInformation = "";
            try
            {
                inputJson = JsonConvert.DeserializeObject<ShotUploadDTO>(value);
                if (inputJson == null)
                {
                    throw new Exception();
                }
            }
            catch (Exception)
            {
                return BadRequest("Values are not provided");
            }


            List<OldNewImageFilePath> imagesPathes = new List<OldNewImageFilePath>();
            try
            {
                //Base shot model
                Shot newShot = new Shot()
                {
                    UserId = jwtUser.Id,
                    Title = inputJson.title ?? "Default title",
                    CreatedDateTime = DateTime.UtcNow
                };
                //Adding genres
                foreach(string inputGenre in inputJson?.genres ?? Enumerable.Empty<string>())
                {
                    var genre = _genresRepository.Query(
                        genre => genre.Name.ToLower() == inputGenre.ToLower()).FirstOrDefault();
                    if (genre != null)
                        newShot.Genres.Add(genre);
                }
                //Adding tags
                foreach (string inputTag in inputJson?.tags ?? Enumerable.Empty<string>())
                {
                    var tag = _tagsRepository.Query(
                        tag => tag.Name.ToLower() == inputTag.ToLower()).FirstOrDefault();
                    if (tag != null)
                        newShot.Tags.Add(tag);
                }
                
                //If there are images to upload
                if(inputJson?.images != null) { 
                    //Uploading images
                    foreach (IFormFile img in images)
                    {
                        ImageUploaderResult uploadResult = await ImageUploader.UploadImage(img);
                        if (uploadResult.ResultCode == ImageUploaderResultCode.UploadingError || uploadResult.FileName == null)
                            throw new FileLoadException("Uploading image failed");
                        if (uploadResult.ResultCode == ImageUploaderResultCode.ForbiddenExtension)
                            throw new BadImageFormatException("Unsupported file extension");
                        imagesPathes.Add(new OldNewImageFilePath() { OldFileName = img.FileName, NewFilePath = uploadResult.FileName });
                    }
                    //Synchronizing images
                    int imagesRejected = 0;
                    foreach(OldNewImageFilePath path in imagesPathes)
                    {
                        bool find = false;
                        foreach(ShoutUploadDTO_Image inputImage in inputJson?.images ?? Enumerable.Empty<ShoutUploadDTO_Image>())
                        {
                            if(inputImage.filename == path.OldFileName)
                            {
                                Image newImage = new Image()
                                {
                                    imagePath = path.NewFilePath,
                                    Price = (decimal)(inputImage.price ?? 0)
                                };
                                newShot.Images.Add(newImage);
                                find = true; break;
                            }
                        }
                        if (!find)
                        {
                            //Image data was not found, rejecting the image
                            imagesRejected += 1;
                            await ImageUploader.removeImage(path.NewFilePath);
                        }
                    }
                    if (imagesRejected > 0)
                        returnInformation += $"{imagesRejected} were rejected, due to the missing information about them";
                }
                _shotsRepository.Add(newShot);
                _shotsRepository.Save();
                return Ok("Successfully uploaded");
            }
            catch (FileLoadException ex)
            {
                //Removing uploaded images in case if uploading failed
                await removeFiles(imagesPathes);
                return StatusCode(500, ex.Message);
            }
            catch (BadImageFormatException ex)
            {
                await removeFiles(imagesPathes);
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<bool> removeFiles(List<OldNewImageFilePath> images)
        {
            try
            {
                foreach (OldNewImageFilePath item in images)
                    await ImageUploader.removeImage(item.NewFilePath);
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }
        private class OldNewImageFilePath
        {
            public string OldFileName { get; set; } = string.Empty;
            public string NewFileName { get; set; } = string.Empty;
            public string NewFilePath { get; set; } = string.Empty;

        }
    }
}
