using Artify.DAL;
using Artify.Models.DbModels.Users;
using Artify.Models.HelperModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace Artify.Controllers
{
    
    [ApiController]
    [EnableCors]
    public class AuthenticationController : ControllerBase
    {
        private IConfiguration _configuration;
        private UsersRepository _usersRepository;
        private UserRolesRepository _usersRoleRepository;
        readonly int userRoleId;
        public AuthenticationController(IConfiguration configuration, IRepository<User> usersRepository, IRepository<UserRole> usersRolesRepository)
        {
            _configuration = configuration;
            this._usersRepository = (UsersRepository)usersRepository;
            this._usersRoleRepository = (UserRolesRepository)usersRolesRepository;

            var role = _usersRoleRepository.Query(role => role.RoleName == "user").FirstOrDefault();
            if (role == null) {
                UserRole userRole = new UserRole();
                userRole.RoleName = "user";
                _usersRoleRepository.Add(userRole);
                _usersRoleRepository.Save();
                userRoleId = userRole.Id;
            }else
                userRoleId=role.Id;
        }
        
        [AllowAnonymous]
        [Route("api/[controller]/Authentication")]
        [HttpPost]
        public IActionResult Login([FromBody] UserLogin userLogin)
        //public IActionResult Login(string username, string password)
        {
            var user = Authenticate(userLogin);

            if (user != null)
            {
                var token = Generate(user);
                return Ok(new { token = token });
            }
            return NotFound("UserDTO not found");
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/[controller]/Registration")]
        public async Task<IActionResult> Registration([FromBody] UserRegistration registrationData)
        {
            if (_usersRepository.Query(user => user.Username == registrationData.Username).Count() > 0 ||
               _usersRepository.Query(user => user.Email == registrationData.Email).Count() > 0)
            {
                return BadRequest("UserDTO is already registered");
            }
            User newUser = new User();
            newUser.Username = registrationData.Username;
            newUser.Email = registrationData.Email;
            newUser.Password = hashSHA256(registrationData.Password);
            newUser.RoleId = userRoleId;
            _usersRepository.Add(newUser);
            await _usersRepository.SaveAsync();
            return Ok(new { token = Generate(newUser) });
        }
        private User? Authenticate(UserLogin userLogin)
        {
            string hashedPassword = hashSHA256(userLogin.Password);
            return _usersRepository.Query(user => 
                user.Username == userLogin.Username && 
                user.Password == hashedPassword)
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
                new Claim(ClaimTypes.Role, user.RoleId.ToString())
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
