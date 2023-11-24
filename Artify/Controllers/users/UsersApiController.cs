using Artify.Controllers.users.DTO.UserDTO;
using Artify.DAL;
using Artify.Helpers.Uploaders;
using Artify.Models.DbModels.Users;
using Artify.Models.DbModels.Users.Attributes;
using Artify.Models.HelperModels;
using Artify.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.Data;
using static Artify.Helpers.Uploaders.ImageUploader;

namespace Artify.Controllers.users
{
    [ApiController]
    public class UsersApiController : ControllerBase
    {
        private UsersRepository _usersRepository;
        private SocialProfilesRepository _userProfilesRepository;
        public UsersApiController(IRepository<User> usersRepository, IRepository<SocialProfile> userProfilesRepository)
        {
            this._usersRepository = (UsersRepository)usersRepository;
            this._userProfilesRepository = (SocialProfilesRepository)userProfilesRepository;
        }

        /// <summary>
        /// Returns data of logged in user retrieving id from token
        /// </summary>
        /// /// <response code="200">Returns user in json format</response>
        /// <response code="404">UserDTO was not found in the database</response>
        /// <response code="500">Can't fetch user right now</response>
        [Route("api/[controller]/[action]")]
        [HttpGet]
        [Authorize]
        public IActionResult GetCurrentUserData()
        {
            try
            {
                JwtUser? model = UsersService.GetCurrentUser(this.HttpContext);
                if (model == null)
                    return Forbid();
                User? user = _usersRepository.Query(user => user.Id == model.Id).FirstOrDefault();
                if (user == null)
                    return NotFound(new { errorMessage = "UserDTO was not found in the database" });
                return new JsonResult(new BaseDTOUser(user, true));
            }
            catch (Exception)
            {
                return BadRequest(new { errorMessage = "Something went wrong" });
            }
        }


        /// <summary>
        /// Returns data of target user retrieving id from url
        /// </summary>
        /// /// <response code="200">Returns user in json format</response>
        /// <response code="404">UserDTO was not found in the database</response>
        /// <response code="500">Can't fetch user right now</response>
        [Route("api/[controller]/[action]")]
        [HttpGet]
        public IActionResult GetTargetUserData(int id)
        {
            var user = _usersRepository.Query(user => user.Id == id).FirstOrDefault();
            if (user == null)
                return NotFound();

            return new JsonResult(new BaseDTOUser(user));
        }
        private class UserSocialProfileDTO : BaseDTOUser, ISocialProfilesList
        {
            public UserSocialProfileDTO(User user) : base(user) { }
            public List<SocialProfileDTO> SocialProfiles { get; set; } = new List<SocialProfileDTO>();
        }

        private class UserSocialProfilesDTO : ISocialProfilesList
        {
            public List<SocialProfileDTO> SocialProfiles { get; set; } = new List<SocialProfileDTO>();
        }


        /// <summary>
        /// Returns user social profiles data
        /// </summary>
        /// /// <response code="200">Returns user with the social profiles in json format</response>
        /// <response code="404">UserDTO was not found in the database</response>
        /// <response code="500">Can't fetch user right now</response>
        [Route("api/[controller]/[action]")]
        [HttpGet]
        [Authorize]
        public IActionResult GetUserSocialProfiles()
        {
            try
            {
                JwtUser? model = UsersService.GetCurrentUser(this.HttpContext);
                if (model == null)
                    return Forbid();
                User? user = _usersRepository.Query(user => user.Id == model.Id).FirstOrDefault();
                if (user == null) return NotFound(new { errorMessage = "UserDTO was not found in the database" });

                var returnModel = new UserSocialProfilesDTO();
                GetUserSocialProfilesDTO(user, returnModel);

                return Ok(returnModel);
            }
            catch (Exception)
            {
                return BadRequest(new { errorMessage = "Something went wrong" });
            }
        }



        /// <summary>
        /// Update logged in user social profiles data
        /// </summary>
        /// /// <response code="200"></response>
        /// <response code="404">UserDTO was not found in the database</response>
        /// <response code="500">Can't fetch user right now</response>
        [Route("api/[controller]/[action]")]
        [HttpPost]
        [Authorize]
        public IActionResult UpdateUserSocialProfiles([FromForm] string value)
        {
            try
            {
                JwtUser? model = UsersService.GetCurrentUser(this.HttpContext);
                if (model == null)
                    return Forbid();
                User? user = _usersRepository.Query(user => user.Id == model.Id).FirstOrDefault();
                if (user == null)
                    return NotFound(new { errorMessage = "UserDTO was not found in the database" });
                try
                {
                    var inputJson = JsonConvert.DeserializeObject<UserSocialProfilesDTO>(value) ?? throw new Exception();
                    var updatedSocialProfiles = inputJson.SocialProfiles;

                    #region add or update social profile
                    updatedSocialProfiles.ForEach((profile) =>
                    {
                        var storedProfile = user.UserSocialProfiles.Where(usp => usp.SocialProfile.Name == profile.Name).FirstOrDefault();
                        if (storedProfile == null)
                        {
                            var socialPrfile = _userProfilesRepository.Query(sp => sp.Name == profile.Name).
                            FirstOrDefault() ?? throw new NullReferenceException("No such social network in database");
                            user.UserSocialProfiles.Add(new UserSocialProfile()
                            {
                                UserId = user.Id,
                                SocialProfileId = socialPrfile.Id,
                                Address = profile.Address,
                            });
                            _userProfilesRepository.Save();
                        }
                        else
                        {
                            if (storedProfile.Address != profile.Address)
                            {
                                storedProfile.Address = profile.Address;
                                _userProfilesRepository.Save();
                            }
                        }
                    });
                    #endregion

                    #region remove social profile
                    List<int> deletedProfileIds = new();
                    user.UserSocialProfiles.ForEach(profile =>
                    {
                        var search = inputJson.SocialProfiles.Where(sp=>sp.Address==profile.Address).FirstOrDefault();
                        if(search == null) deletedProfileIds.Add(profile.Id);
                    });
                    deletedProfileIds.ForEach(id =>
                    {
                        var deletedProfile = user.UserSocialProfiles.Single(usp => usp.Id == id);
                        user.UserSocialProfiles.Remove(deletedProfile);
                        _userProfilesRepository.Save();
                    });
                    #endregion

                    var returnModel = new UserSocialProfilesDTO();
                    GetUserSocialProfilesDTO(user, returnModel);

                    return Ok(returnModel);
                }
                catch (Exception)
                {
                    return BadRequest(new { errorMessage = "Values are not provided" });
                }

            }
            catch (Exception)
            {
                return BadRequest(new { errorMessage = "Something went wrong" });
            }
        }

        /// <summary>
        /// Update logged in user basic data
        /// </summary>
        /// <param name="logoImage">User logo image</param>
        /// <param name="value">Necessary JSON data</param>
        /// /// <response code="200"></response>
        /// <response code="404">UserDTO was not found in the database</response>
        /// <response code="500">Can't fetch user right now</response>
        [Route("api/[controller]/[action]")]
        [HttpPut]
        [Authorize]
        public async Task<IActionResult> UpdateCurrentUser([FromForm] IFormFile logoImage, [FromForm] string value)
        {
            try
            {
                JwtUser? jwtUser = UsersService.GetCurrentUser(this.HttpContext);
                if (jwtUser == null)
                    return Unauthorized();
                User? user = _usersRepository.Query(user => user.Id == jwtUser.Id).FirstOrDefault();
                if (user == null)
                    return NotFound(new { errorMessage = "UserDTO was not found in the database" });
                try
                {
                    var inputJson = JsonConvert.DeserializeObject<BaseDTOUser>(value);
                    if (inputJson == null)
                    {
                        throw new Exception();
                    }

                    user.FullName = inputJson.FullName ?? user.FullName;
                    user.Email = inputJson.Email ?? user.Email;
                    user.Location = inputJson.Location ?? user.Location;
                    user.Info = inputJson.Info;

                    var logoImagePath = new OldNewImageFilePath();

                    if (logoImage.FileName != "blob")
                    {
                        ImageUploaderResult uploadResult = await ImageUploader.UploadImage(logoImage, "logoImages");
                        if (uploadResult.ResultCode == ImageUploaderResultCode.Error || uploadResult.FileName == null)
                            throw new FileLoadException("Uploading image failed");
                        if (uploadResult.ResultCode == ImageUploaderResultCode.ForbiddenExtension)
                            throw new BadImageFormatException("Unsupported file extension");
                        logoImagePath.OldFileName = logoImage.FileName;
                        logoImagePath.NewFilePath = uploadResult.FileName;
                    }

                    //*
                    if (user.LogoImage != null && user.LogoImage != "")
                    {
                        ImageDeletingResult deletingResult = await ImageUploader.DeleteImage(user.LogoImage);
                        if (deletingResult.ResultCode == ImageDeletingResultCode.Error)
                            throw new FileNotFoundException($"File '{user.LogoImage}' deleting error");
                        if (deletingResult.ResultCode == ImageDeletingResultCode.NotFound)
                            throw new FileNotFoundException($"File '{user.LogoImage}' not found");
                    }
                    //->

                    user.LogoImage = logoImagePath.NewFilePath;

                    _usersRepository.Save();

                    return new JsonResult(new BaseDTOUser(user, true));
                }
                catch (Exception)
                {
                    return BadRequest("Values are not provided");
                }
            }
            catch (Exception)
            {
                return BadRequest(new { errorMessage = "Values are not provided" });
            }
        }

        private static void GetUserSocialProfilesDTO(User user, UserSocialProfilesDTO returnModel)
        {
            user.UserSocialProfiles.ForEach(profile =>
            {
                SocialProfileDTO socialProfile = new SocialProfileDTO()
                {
                    Address = profile.Address,
                    Name = profile.SocialProfile.Name
                };
                returnModel.SocialProfiles.Add(socialProfile);
            });
        }
    }
}
