using Artify.Models.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Artify.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private IConfiguration _configuration;
        public AuthenticationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] UserLogin userLogin)
        {
            var user = Authenticate(userLogin);
            if (user != null)
            {
                var token = Generate(user);
                return Ok(token);
            }
            return NotFound("User not found");
        }
        private UserModel? Authenticate(UserLogin userLogin)
        {
            var currentUser = UserConstants.Users.FirstOrDefault(
                o=>o.UserName.ToLower() == userLogin.UserName.ToLower() 
                && o.Password == userLogin.Password);

            return currentUser;
        }
        private string Generate(UserModel user)
        {
            string? jwt_key = _configuration["Jwt:Key"];
            string? jwt_issuer = _configuration["Jwt:Issuer"];
            string? jwt_audience = _configuration["Jwt:Audience"];
            if (jwt_key == null || jwt_issuer == null || jwt_audience == null) throw new Exception("Config error");

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt_key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserName),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role)
            };
            var token = new JwtSecurityToken(jwt_issuer,
                jwt_audience,
                claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
