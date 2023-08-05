﻿using Artify.Models.Artworks;
using Artify.Models.Artworks.Attributes;
using Artify.Models.Users.Attributes;
using Artify.Models.WorkPreferences;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Users
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public int RoleId { get; set; }

        //
        public string Location { get; set; } = string.Empty;
        public string Info { get; set; } = string.Empty;
        public string WebSite { get; set; } = string.Empty;
        public string Biography { get; set; } = string.Empty;
        public string LogoImage { get; set; } = string.Empty;
        public int BillingId { get; set; }

        // NAVIGATION PROPERTIES

        [ForeignKey(nameof(RoleId))]
        [NotMapped]
        public UserRole UserRole { get; set; } = new();
        [NotMapped]
        public virtual List<Album> Albums { get; } = new();
        [NotMapped]
        public virtual List<Project> Projects { get; } = new();
        [NotMapped]
        public virtual List<Shot> Shots { get; } = new();
        [NotMapped]
        public virtual List<Appreciation> Appreciations { get; } = new();
        [NotMapped]
        public virtual List<UserSocialProfile> UserSocialProfiles { get; } = new();
        [NotMapped]
        public virtual List<UserFollower> UserFollowers { get; } = new();
        [NotMapped]
        public virtual List<EmployerComment> EmployerComments { get; } = new();
        [NotMapped]
        public virtual List<Billing> Billings { get; } = null!;

        //
        public virtual List<FreelanceAvailability> FreelanceAvailabilities { get; set; } = new();
        public virtual List<FullTimeAvailability> FullTimeAvailabilities { get; set; } = new();

        public virtual List<WorkPreference> WorkPreferences { get; set; } = new();
        public virtual List<Vacancy> Vacancies { get; set; } = new();

    }

}
