using Artify.Models.Artworks.Attributes;
using Artify.Models.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.Artworks
{
    public class Shot
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;

        [Required]
        public DateTime CreatedDateTime { get; set; }

        [Required]
        public int DesignerId { get; set; } // Designer is author

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(DesignerId))]
        public virtual Designer Designer { get; set; } = null!;
        public virtual List<Image> Images { get; } = new();
        public virtual List<Comment> Comments { get; } = new();
        public virtual List<Tag> Tags { get; } = new();
        public virtual List<Genre> Genres { get; } = new();
        public virtual List<Tool> Tools { get; } = new();
        public virtual List<Album> Albums { get; } = new();
        public virtual List<Project> Projects { get; } = new();
        public virtual List<Appreciation> Appreciations { get; } = new();





    }
}
