using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Artify.Services;
using Artify.Models.Users;

namespace Artify.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ExampleSecuredController : ControllerBase
    {
        [HttpGet]
        public IActionResult PrivateInformation()
        {
            User? model = UsersService.GetCurrentUser(this.HttpContext);
            if (model == null)
                return Forbid();

            return Ok($"Hello {model.Username}, you gained access to the private information!");
        }
    }
}
