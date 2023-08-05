using Artify.DAL;
using Artify.Models.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Artify.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private IConfiguration _configuration;
        private UsersRepository _usersRepository;
        public AuthenticationController(IConfiguration configuration, IRepository<User> usersRepository)
        {
            _configuration = configuration;
            this._usersRepository = (UsersRepository)usersRepository;
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
        private User? Authenticate(UserLogin userLogin)
        {
            string hashedPassword = hashSHA256(userLogin.Password);
            return _usersRepository.Query(user => 
                user.Username == userLogin.Username && 
                user.Password == hashedPassword)
                .Include(user => user.UserRole)
                .FirstOrDefault();
        }
        private string Generate(User user)
        {
            string? jwt_key = _configuration["Jwt:Key"];
            string? jwt_issuer = _configuration["Jwt:Issuer"];
            string? jwt_audience = _configuration["Jwt:Audience"];
            if (jwt_key == null || jwt_issuer == null || jwt_audience == null) throw new Exception("Config error");

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt_key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim("Id", user.Id.ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Username),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.UserRole.Id.ToString())
            };
            var token = new JwtSecurityToken(jwt_issuer,
                jwt_audience,
                claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private string hashSHA256(string data)
        {
            using (SHA256 hash = SHA256.Create())
            {
                byte[] bytes = hash.ComputeHash(Encoding.UTF8.GetBytes(data));
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }  
        }
    }
}
