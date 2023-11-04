using Artify.Controllers.shots.DTO;
using Artify.Controllers.uploads;
using Artify.DAL;
using Artify.Helpers.Uploaders;
using Artify.Models.DbModels.DbModels.Artworks;
using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using Artify.Models.DbModels.Users;
using Artify.Models.HelperModels;
using Artify.Services;
using Azure;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.IO;
using System.Linq.Expressions;
using System.Reflection.Metadata;
using static Artify.Helpers.Uploaders.ImageUploader;
using Image = Artify.Models.DbModels.DbModels.Artworks.Image;

namespace Artify.Controllers.shots
{
    [ApiController]
    [EnableCors]
    public class ShotsApiController : ControllerBase
    {
        private ShotsRepository _shotsRepository;
        private GenresRepository _genresRepository;
        private TagsRepository _tagsRepository;
        private AppreciationsRepository _appreciationsRepository;
        private UsersRepository _usersRepository;

        public ShotsApiController(IRepository<Shot> shotsRepository,
            IRepository<Genre> genresRepository,
            IRepository<Tag> tagsRepository,
            IRepository<Appreciation> appreciationsRepository,
            IRepository<User> usersRepository
            )
        {
            _shotsRepository = (ShotsRepository)shotsRepository;
            _genresRepository = (GenresRepository)genresRepository;
            _tagsRepository = (TagsRepository)tagsRepository;
            _appreciationsRepository = (AppreciationsRepository)appreciationsRepository;
            _usersRepository = (UsersRepository)usersRepository;
        }
        [HttpPost]
        [Route("api/[controller]/[action]")]
        [Authorize]
        public IActionResult Example(ShotUploadDTO data)
        {
            return Ok();
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
                return Unauthorized();
            ShotUploadDTO? inputJson;
            /// string returnInformation = "";
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
                    Description = inputJson.description ?? "",
                    CreatedDateTime = DateTime.UtcNow,
                    IsDraft = inputJson.isDraft,
                    IsPublic = inputJson.isPublic,
                    BlocksGap = inputJson.blocksGap
                };
                //Adding genres
                //foreach(string inputGenre in inputJson?.genres ?? Enumerable.Empty<string>())
                //{
                //    var genre = _genresRepository.Query(
                //        genre => genre.Name.ToLower() == inputGenre.ToLower()).FirstOrDefault();
                //    if (genre != null)
                //        newShot.Genres.Add(genre);
                //}
                //Adding tags
                foreach (string inputTag in inputJson?.tags ?? Enumerable.Empty<string>())
                {
                    var tag = _tagsRepository.Query(
                        tag => tag.Name.ToLower() == inputTag.ToLower()).FirstOrDefault();
                    //if (tag != null)
                    //    newShot.Tags.Add(tag);
                    if (tag == null)
                    {
                        var newTag = new Tag
                        {
                            Name = inputTag.ToLower()
                        };
                        _tagsRepository.Add(newTag);
                        _tagsRepository.Save();
                    }
                    else
                        newShot.Tags.Add(tag);
                }
                //Uploading images
                int coverImageId = 0;
                foreach (IFormFile img in images)
                {
                    ImageUploaderResult uploadResult = await ImageUploader.UploadImage(img, "shots");
                    if (uploadResult.ResultCode == ImageUploaderResultCode.Error || uploadResult.FileName == null)
                        throw new FileLoadException("Uploading image failed");
                    if (uploadResult.ResultCode == ImageUploaderResultCode.ForbiddenExtension)
                        throw new BadImageFormatException("Unsupported file extension");
                    imagesPathes.Add(new OldNewImageFilePath() { OldFileName = img.FileName, NewFilePath = uploadResult.FileName });

                    if (img.FileName == inputJson?.cover)
                        coverImageId = imagesPathes.Count() - 1;

                }
                foreach (OldNewImageFilePath imagePath in imagesPathes)
                {
                    ImageUploaderResult compressedImage = CompressImage(imagePath.NewFilePath, "shots");
                    Image newImage = new Image()
                    {
                        ImagePath = imagePath.NewFilePath,
                        ThumbnailFullPath = compressedImage.FileName ?? imagePath.NewFilePath,
                        CreatedDateTime = DateTime.UtcNow
                        //Price = 0
                    };
                    newShot.Images.Add(newImage);
                }
                newShot.Cover = newShot.Images[coverImageId].ThumbnailFullPath;

                //If there are images to upload
                //if(inputJson?.images != null) { 
                //    //Uploading images
                //    foreach (IFormFile img in images)
                //    {
                //        ImageUploaderResult uploadResult = await ImageUploader.UploadImage(img, "shots");
                //        if (uploadResult.ResultCode == ImageUploaderResultCode.Error || uploadResult.FileName == null)
                //            throw new FileLoadException("Uploading image failed");
                //        if (uploadResult.ResultCode == ImageUploaderResultCode.ForbiddenExtension)
                //            throw new BadImageFormatException("Unsupported file extension");
                //        imagesPathes.Add(new OldNewImageFilePath() { OldFileName = img.FileName, NewFilePath = uploadResult.FileName });
                //    }
                //    //Synchronizing images
                //    int imagesRejected = 0;
                //    foreach(OldNewImageFilePath path in imagesPathes)
                //    {
                //        bool find = false;
                //        foreach(ShoutUploadDTO_Image inputImage in inputJson?.images ?? Enumerable.Empty<ShoutUploadDTO_Image>())
                //        {
                //            if(inputImage.filename == path.OldFileName)
                //            {
                //                ImageUploaderResult compressedImage = CompressImage(path.NewFilePath, "shots");
                //                Image newImage = new Image()
                //                {
                //                    imagePath = path.NewFilePath,
                //                    thumbnailFullPath = compressedImage.FileName ?? path.NewFilePath,
                //                    Price = 0
                //                };
                //                newShot.Images.Add(newImage);
                //                find = true; break;
                //            }
                //        }
                //        if (!find)
                //        {
                //            //Image data was not found, rejecting the image
                //            imagesRejected += 1;
                //            await ImageUploader.removeImage(path.NewFilePath);
                //        }
                //    }
                //    if (imagesRejected > 0)
                //        returnInformation += $"{imagesRejected} were rejected, due to the missing information about them";
                //}
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

        /// <summary>
        /// Return a list with recent shots
        /// Supports pagination
        /// </summary>
        /// <param name="page">Current page</param>
        /// <param name="filters">Applied filters</param>
        /// <param name="pageSize">Page size</param>
        /// <returns>Shots list</returns>
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> GetShots(int page = 0, string filters = "", int pageSize = 20)
        {
            if (pageSize > 50)
                return BadRequest("Page size cannot be more than 50");
            if (page < 0)
                return BadRequest("Page cannot be negative");
            int pages = _shotsRepository.Count() / pageSize;
            if (page > pages)
                return BadRequest("Wrong page");

            List<GetShotDTO> returnableShots = new List<GetShotDTO>();

            //var a = applyFilters(filters);

            JwtUser? jwtUser = UsersService.GetCurrentUser(this.HttpContext);
            int? currentUserId = null;
            if (jwtUser != null)
                currentUserId = jwtUser.Id;

            await _shotsRepository.Query(applyFilters(filters)).OrderByDescending(shot => shot.Id).Skip(page * pageSize).Take(pageSize).ForEachAsync(shot =>
            {
                GetShotDTO getShotDTO = new(shot, currentUserId);
                shot.Images.ForEach(image =>
                {
                    getShotDTO.thumbnailsPaths.Add(UploadsController.PrepareImagePath(image.ThumbnailFullPath));
                });
                returnableShots.Add(getShotDTO);
            }
            );
            return Ok(returnableShots);
        }
        //public class GetShotsParameters {
        //    public int page { get; set; } = 0;
        //    public string filters { get; set; } = "";
        //    public int pageSize { get; set; } = 20;
        //}
        private Expression<Func<Shot, bool>> applyFilters(string filters)
        {
            string[] splittedFilters = filters.Split('&');

            //var a = _shotsRepository.Query(shot => shot.Tags.Any(x => x.Name.ToLower().StartsWith(value.ToLower())));
            var filterMappings = new Dictionary<string, Func<string, Expression<Func<Shot, bool>>>>
            {
                { "userId", value => shot => shot.UserId == int.Parse(value) },
                { "tag", value => shot => shot.Tags.Any(x => x.Name.ToLower().Contains(value.ToLower())) },
                { "likedUserId", value => shot => shot.Appreciations.Any(x => x.UserId == int.Parse(value)) }
            };
            ParameterExpression parameter = Expression.Parameter(typeof(Shot), "shot");
            Expression<Func<Shot, bool>>? finalFilter = null;


            foreach (string filterString in splittedFilters)
            {
                string[] splittedSingleFilter = filterString.Split('=');
                if (splittedSingleFilter.Length != 2)
                    continue;

                if (filterMappings.TryGetValue(splittedSingleFilter[0], out var filterExpression))
                {
                    var value = splittedSingleFilter[1];

                    var filter = filterExpression(value);

                    // If the final filter expression is null, set it to the current filter expression.
                    if (finalFilter == null)
                        finalFilter = filter;
                    else
                    {
                        // Otherwise, combine the final filter expression and the current filter expression using the AND operator.s
                        var body = Expression.AndAlso(
                            Expression.Invoke(finalFilter, parameter),
                            Expression.Invoke(filter, parameter)
                        );
                        finalFilter = Expression.Lambda<Func<Shot, bool>>(body, parameter);
                    }
                }

            }
            if (finalFilter != null)
                return finalFilter;


            //Expression<Func<Shot, bool>> trueExpression = shot => true;
            return shot => true;
        }

        /// <summary>
        /// Return specific shot with links to the full size images
        /// If shot is not public and user requesting it is not a creator, return Forbid
        /// </summary>
        /// <param name="id">Id of shot</param>
        /// <returns>Shot model or Forbidden</returns>
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IActionResult GetShot(int id)
        {
            //
            JwtUser? jwtUser = UsersService.GetCurrentUser(this.HttpContext);
            User? user = null;

            if (jwtUser != null)
            {
                user = _usersRepository.Query(user => user.Id == jwtUser.Id).FirstOrDefault();
            }
            //
            var shot = _shotsRepository.Query(shot => shot.Id == id).FirstOrDefault();
            if (shot == null)
                return NotFound("Shot was not found");
            if (!shot.IsPublic)
            {
                //JwtUser? jwtUser = UsersService.GetCurrentUser(this.HttpContext);
                if (jwtUser == null || jwtUser.Id != shot.UserId)
                    return Forbid();
            }

            GetSingleShotDTO returnModel = new GetSingleShotDTO(shot, user?.Id);

            return Ok(returnModel);
        }

        /// <summary>
        /// Make input shot appreciation true/false for current user return array of appresiations of input shot
        /// If shot is not public and user requesting it is not logged in, return Forbid
        /// </summary>
        /// <param name="input" >Shot that have to be appreciated</param>
        /// <returns>Array of appresiations of input shot or Forbidden</returns>
        [HttpPost]
        [Route("api/[controller]/[action]")]
        [Authorize]
        public IActionResult AppreciateShot(AppreciateShotInput input)
        {
            JwtUser? jwtUser = UsersService.GetCurrentUser(this.HttpContext);

            if (jwtUser == null)
                return Unauthorized();

            var user = _usersRepository.Query(user => user.Id == jwtUser.Id).FirstOrDefault();

            if (user == null)
                return Unauthorized();

            var shot = _shotsRepository.Query(shot => shot.Id == input.shotId).FirstOrDefault();

            if (shot == null)
                return NotFound("Invalid id");

            if (!shot.IsPublic && shot.UserId != jwtUser.Id)
                return Forbid("The shot is private");

            var appreciation = shot.Appreciations
                .FirstOrDefault(appreciation => appreciation.UserId == jwtUser.Id);

            if (appreciation == null)
            {
                Appreciation newAppreciation = new Appreciation()
                {
                    Author = user,
                    ShotId = input.shotId
                };
                shot.Appreciations.Add(newAppreciation);
                _shotsRepository.Save();
            }
            else
            {
                _appreciationsRepository.Remove(appreciation.Id);
                _appreciationsRepository.Save();
            }

            return GetAppreciations(input.shotId);
        }

        public class AppreciateShotInput
        {
            public int shotId { get; set; }
            public bool appreciated { get; set; } = true;
        }

        /// <summary>
        /// Return current shot id and it appreciations count 
        /// If shot is not found, return NotFound
        /// </summary>
        /// <param name="shotId" >Current shot id</param>
        /// <returns>Current shot id and it appreciations count or NotFound</returns>
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IActionResult GetAppreciations(int shotId)
        {
            var shot = _shotsRepository.Query(shot => shot.Id == shotId).FirstOrDefault();
            if (shot == null) return NotFound();

            return Ok(new
            {
                shoutId = shotId,
                count = shot.Appreciations.Count(),
            });
        }

        /// <summary>
        /// Return true if current user appreciate current shot or false if not
        /// </summary>
        /// <param name="shotId" >Current shot id</param>
        /// <returns>True if current user appreciate current shot or false if not or NotFound</returns>
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IActionResult IsAppreciatedByCurrnetUser(int shotId)
        {
            JwtUser? jwtUser = UsersService.GetCurrentUser(this.HttpContext);

            if (jwtUser == null)
                return Unauthorized();

            var user = _usersRepository.Query(user => user.Id == jwtUser.Id).FirstOrDefault();

            if (user == null)
                return Unauthorized();

            var appreciation = _appreciationsRepository.Query(
                appreciation => appreciation.ShotId == shotId &&
                appreciation.UserId == user.Id).FirstOrDefault();

            return Ok(appreciation != null);
        }
    }
}
