﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Artify.Services;
using Artify.Models.HelperModels;
using Microsoft.AspNetCore.Cors;

namespace Artify.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    [Authorize]
    public class ExampleSecuredController : ControllerBase
    {
        [HttpGet]
        public IActionResult PrivateInformation()
        {
            JwtUser? model = UsersService.GetCurrentUser(this.HttpContext);
            if (model == null)
                return Forbid();

            return Ok($"Hello {model.Username}, you gained access to the private information!");
        }
    }
}
