using Artify.Controllers.users.DTO.UserDTO;
using Artify.DAL;
using Artify.Models.DbModels.Users;
using Artify.Models.DbModels.Users.Attributes;
using Artify.Models.HelperModels;
using Artify.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;
namespace Artify.Controllers.users
{
    [ApiController]
    public class UsersApiController : ControllerBase
    {
        private UsersRepository _usersRepository;
        private SocialProfilesRepository _userProfilesRepository;
        public UsersApiController(IRepository<User> usersRepository, IRepository<SocialProfile> userProfilesRepository) {
            this._usersRepository = (UsersRepository)usersRepository;
            this._userProfilesRepository = (SocialProfilesRepository)userProfilesRepository;
        }

        /// <summary>
        /// Returns user data
        /// </summary>
        /// /// <response code="200">Returns user in json format</response>
        /// <response code="404">UserDTO was not found in the database</response>
        /// <response code="500">Can't fetch user right now</response>
        [Route("api/users/[controller]/[action]")]
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
                return new JsonResult(new BaseDTOUser(user));
            }catch(Exception)
            {
                return BadRequest(new { errorMessage = "Something went wrong" });
            }
        }
        private class UserSocialProfileDTO : BaseDTOUser, ISocialProfilesList
        {
            public UserSocialProfileDTO(User user) : base(user) { } 
            public List<SocialProfileDTO> SocialProfiles { get; set; } = new List<SocialProfileDTO>();
        }
        /// <summary>
        /// Returns user data
        /// </summary>
        /// /// <response code="200">Returns user with the social profiles in json format</response>
        /// <response code="404">UserDTO was not found in the database</response>
        /// <response code="500">Can't fetch user right now</response>
        [Route("api/users/[controller]/[action]")]
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
                UserSocialProfileDTO returnModel = new UserSocialProfileDTO(user);
                user.UserSocialProfiles.ForEach(profile =>
                {
                    SocialProfileDTO socialProfile = new SocialProfileDTO()
                    {
                        Address = profile.Address,
                        Name = profile.SocialProfile.Name
                    };
                    returnModel.SocialProfiles.Add(socialProfile);
                });

                int count = user.UserSocialProfiles.Count();
               
                // _socialProfilesRepository.Query(profile => profile.UserSocialProfiles.Contains())
                return Ok(returnModel);
            }
            catch (Exception)
            {
                return BadRequest(new { errorMessage = "Something went wrong" });
            }
        }

        [Route("api/users/[controller]/[action]")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> UpdateUserSocialProfiles(ListSocialProfileDTO socialProfiles)
        {
            try
            {
                JwtUser? model = UsersService.GetCurrentUser(this.HttpContext);
                if (model == null)
                    return Forbid();
                User? user = _usersRepository.Query(user => user.Id == model.Id).FirstOrDefault();
                if (user == null) return NotFound(new { errorMessage = "UserDTO was not found in the database" });

                var userProfiles = _userProfilesRepository.Query(profile => profile.UserSocialProfiles.Where(item => item.UserId == user.Id).Count() > 0).AsQueryable();

                foreach (SocialProfileDTO profile in socialProfiles.SocialProfiles)
                {
                    var existingProfile = userProfiles.Where(uprofile => uprofile.Name.ToLower() == profile.Name.ToLower()).FirstOrDefault();
                    if (existingProfile != null)
                    {
                        existingProfile.UserSocialProfiles.RemoveAll(item => item.UserId == user.Id);
                        if (profile.Address != "")
                        {
                            existingProfile.UserSocialProfiles.Add(new UserSocialProfile()
                            {
                                Address = profile.Address,
                                UserId = user.Id
                            });
                        }
                    }
                    else
                    {
                        if (profile.Address != "")
                        {
                            SocialProfile socialProfile = new Artify.Models.DbModels.Users.Attributes.SocialProfile()
                            {
                                Name = FirstCharToUpper(profile.Name.ToLower()),
                                UserSocialProfiles = new List<UserSocialProfile>()
                            };
                            socialProfile.UserSocialProfiles.Add(
                                new UserSocialProfile()
                                {
                                    Address = profile.Address,
                                    UserId = user.Id
                                });
                            _userProfilesRepository.Add(socialProfile);
                        }
                    }
                }
                await _userProfilesRepository.SaveAsync();
                return GetUserSocialProfiles();
            }catch (Exception)
            {
                return BadRequest(new { errorMessage = "Something went wrong" });
            }
        }
        public class ListSocialProfileDTO : ISocialProfilesList 
        {
            public List<SocialProfileDTO> SocialProfiles { get; set; } = new List<SocialProfileDTO>();
        }

        public static string FirstCharToUpper(string input) =>
           input switch
           {
               null => throw new ArgumentNullException(nameof(input)),
               "" => throw new ArgumentException($"{nameof(input)} cannot be empty", nameof(input)),
               _ => string.Concat(input[0].ToString().ToUpper(), input.AsSpan(1))
           };
    }
}
