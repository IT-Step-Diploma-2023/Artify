using Artify.Models.Users;
using System.Security.Claims;

namespace Artify.Services
{
    public static class UsersService
    {
        public static JwtUser? GetCurrentUser(HttpContext context)
        {
            var identity = context.User.Identity as ClaimsIdentity;
            if(identity != null)
            {
                var userClaims = identity.Claims;
                return new JwtUser
                {
                    Id = int.Parse(userClaims.FirstOrDefault(u => u.Type == "Id")?.Value ?? "-1"),
                    Username = userClaims.FirstOrDefault(u => u.Type == ClaimTypes.NameIdentifier)?.Value ?? "",
                    Email = userClaims.FirstOrDefault(u => u.Type == ClaimTypes.Email)?.Value ?? "",
                    RoleId = int.Parse(userClaims.FirstOrDefault(u => u.Type == ClaimTypes.Role)?.Value ?? "-1")
                };
            }
            return null;
        }
    }
}
