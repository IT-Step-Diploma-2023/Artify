﻿using Artify.DAL;
using Artify.Models.DbModels.Users;
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
                return new JsonResult(new EndPointUserModel(user));
            }catch(Exception)
            {
                return BadRequest(new { errorMessage = "Something went wrong" });
            }
        }


        private class EndPointUserModel
        { 
            public int Id { get; set; }
            public string? Username { get; set; } 
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
            public string? FullName { get; set; } 
            public string? Email { get; set; }
            public int RoleId { get; set; }
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
            public string? Location { get; set; } 
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
            public string? Info { get; set; } 
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
            public string? WebSite { get; set; } 
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
            public string? Biography { get; set; }
            [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
            public string? LogoImage { get; set; } 
            
            public EndPointUserModel(User user)
            {
                fillFields(user);
            }
            public EndPointUserModel() { }
            public void fillFields(User user)
            {
                this.Id = user.Id;
                this.Username = user.Username;
                this.Email = user.Email;
                this.RoleId = user.RoleId;


                if (IsNotEmpty(user.FullName))
                    this.FullName = user.FullName;
                if (IsNotEmpty(user.Location))
                    this.Location = user.Location;
                if (IsNotEmpty(user.Info))
                    this.Info = user.Info;
                if (IsNotEmpty(user.Biography))
                    this.WebSite = user.Biography;
                this.Biography = user.Biography;
                if (IsNotEmpty(user.LogoImage))
                    this.LogoImage = user.LogoImage;
            }

            private bool IsNotEmpty(string? value)
            {
                return !string.IsNullOrEmpty(value);
            }
        }
    }


    
}
