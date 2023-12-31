﻿using System.ComponentModel.DataAnnotations;
using Artify.Models.DbModels.DbModels.Artworks;

namespace Artify.Models.DbModels.DbModels.Artworks.Attributes
{
    public class Genre
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        // NAVIGATION PROPERTIES
        public virtual List<Shot> Shots { get; set; } = new();
    }
}
