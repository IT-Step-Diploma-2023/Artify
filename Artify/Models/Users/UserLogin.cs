﻿namespace Artify.Models.Users
{
    public class UserLogin
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
