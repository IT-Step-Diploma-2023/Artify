using Artify.Models.DbModels.DbModels.Artworks.Attributes;
using Artify.Models.DbModels.Users;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Artify.Models.DbModels.DbModels.Artworks
{
    public class Shot
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime CreatedDateTime { get; set; }

        [Required]
        public int UserId { get; set; } // User is author

        // NAVIGATION PROPERTIES
        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; } = null!;
        public virtual List<Image> Images { get; set; } = new();
        public virtual List<ShotComment> ShotComments { get; set; } = new();
        public virtual List<Tag> Tags { get; set; } = new();
        public virtual List<Genre> Genres { get; set; } = new();
        public virtual List<Tool> Tools { get; set; } = new();
        public virtual List<Album> Albums { get; set; } = new();
        public virtual List<Project> Projects { get; set; } = new();
        public virtual List<Appreciation> Appreciations { get; set; } = new();





    }
}
