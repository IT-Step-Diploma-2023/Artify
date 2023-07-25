﻿using Artify.Models.Users;
using System.Security.Claims;

namespace Artify.Services
{
    public static class UsersService
    {
        public static UserModel? GetCurrentUser(HttpContext context)
        {
            var identity = context.User.Identity as ClaimsIdentity;
            if(identity != null)
            {
                var userClaims = identity.Claims;
                return new UserModel
                {
                    UserName = userClaims.FirstOrDefault(u => u.Type == ClaimTypes.NameIdentifier)?.Value ?? "",
                    Email = userClaims.FirstOrDefault(u => u.Type == ClaimTypes.Email)?.Value ?? "",
                    Role = userClaims.FirstOrDefault(u => u.Type == ClaimTypes.Role)?.Value ?? ""
                };
            }
            return null;
        }
    }
}
