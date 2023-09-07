using Artify.DAL;
using Artify.Models.DbModels.Users;
using Artify.Models.HelperModels;
using Artify.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Artify.Controllers.users
{
    [ApiController]
    public class UsersApiController : ControllerBase
    {
        private UsersRepository _usersRepository;
        public UsersApiController(IRepository<User> usersRepository) {
            this._usersRepository = (UsersRepository)usersRepository;
        }

        /// <summary>
        /// Returns user data
        /// </summary>
        /// /// <response code="200">Returns user in json format</response>
        /// <response code="404">User was not found in the database</response>
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
                    return NotFound(new { errorMessage = "User was not found in the database" });
                return Ok(new EndPointUserModel(user));
            }catch(Exception)
            {
                return BadRequest(new { errorMessage = "Something went wrong" });
            }
        }


        private class EndPointUserModel
        { 
            public int Id { get; set; }
            public string Username { get; set; } = string.Empty;
            public string FullName { get; set; } = string.Empty;
            public string Email { get; set; } = string.Empty;
            public int RoleId { get; set; }
            public string? Location { get; set; } = string.Empty;
            public string? Info { get; set; } = string.Empty;
            public string? WebSite { get; set; } = string.Empty;
            public string? Biography { get; set; } = string.Empty;
            public string? LogoImage { get; set; } = string.Empty;
            
            public EndPointUserModel(User user)
            {
                fillFields(user);
            }
            public EndPointUserModel() { }
            public void fillFields(User user)
            {
                this.Id = user.Id;
                this.Username = user.Username;
                this.FullName = user.FullName;
                this.Email = user.Email;    
                this.RoleId = user.RoleId;
                this.Location = user.Location;
                this.Info = user.Info;
                this.WebSite = user.WebSite;
                this.Biography = user.Biography;
                this.LogoImage = user.LogoImage;
            }
        }
    }


    
}
