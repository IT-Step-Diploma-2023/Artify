using Artify.Models.Users;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Artworks
{
    public class Album
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;

        [Required]
        public int DesignerId { get; set; }

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(DesignerId))]
        public virtual Designer Designer { get; set; } = null!;
        public virtual List<Shot> Shots { get; } = new();
    }
}
