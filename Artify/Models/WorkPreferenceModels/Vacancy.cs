using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.Design;
using System.Xml.Linq;
using Artify.Models.Users;

namespace Artify.Models.WorkPreferenceModels
{
    public class Vacancy
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(256)]
        [Display(Name = "Заголовок")]
        public string Title { get; set; }

        [Required]
        [Display(Name = "Опис")]
        public string Description { get; set; }

        [Required]
        [Display(Name = "Місцезнаходження")]
        public string Location { get; set; }

        [Required]
        [Display(Name = "Віддалений доступ")]
        public int RemoteAvailable { get; set; }

        [Required]
        [Display(Name = "Заробітна плата")]
        public string Salary { get; set; } /////string??????????????

        [Required]
        [Display(Name = "Тип найму")]
        public string empType { get; set; } //full or freelance

        [Required]
        [Display(Name = "TimeStamp")]
        public int TimeStamp { get; set; } /////int??????????????

        [Required]
        [Display(Name = "В улюблених")]
        public bool InBest { get; set; }

        [Required]
        [Display(Name = "Користувач")]
        public int UserId { get; set; }

        [Required]
        [Display(Name = "Спеціальність")]
        public int SpecialityId { get; set; }

        [ForeignKey("Speciality")]
        public virtual Speciality Speciality { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }


    }
}
