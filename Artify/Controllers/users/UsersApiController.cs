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
            }catch(Exception)
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


        /// <summary>
        /// Returns user social profiles data
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

        /// <summary>
        /// Update logged in user social profiles data
        /// </summary>
        /// /// <response code="200"></response>
        /// <response code="404">UserDTO was not found in the database</response>
        /// <response code="500">Can't fetch user right now</response>
        [Route("api/[controller]/[action]")]
        [HttpGet]
        [Authorize]
        public IActionResult UpdateUserSocialProfiles()
        {
            try
            {
                JwtUser? model = UsersService.GetCurrentUser(this.HttpContext);
                if (model == null)
                    return Forbid();
                User? user = _usersRepository.Query(user => user.Id == model.Id).FirstOrDefault();
                if (user == null) return NotFound(new { errorMessage = "UserDTO was not found in the database" });

            }
            catch (Exception)
            {

            }
            return Ok();
        }
    }
}
