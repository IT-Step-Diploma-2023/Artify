﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.Design;
using System.Xml.Linq;
using Artify.Models.Users;

namespace Artify.Models.WorkPreferenceModels
{
    public class WorkPreference
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Повна зайнятість")]
        public bool FullTimeAvailable { get; set; }

        [Required]
        [Display(Name = "Фріланс")]
        public bool FreelanceAvailable { get; set; }

        [Required]
        [Display(Name = "Навички")]
        public string Skills { get; set; }

        [Required]
        [Display(Name = "Користувач")]
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User User { get; set; }

        [Required]
        [Display(Name = "Повна зайнятість")]
        public int FullTimeAvailabilityId { get; set; }

        [ForeignKey("FullTimeAvailabilityId")]
        public virtual FullTimeAvailability FullTimeAvailability { get; set; }

        [Required]
        [Display(Name = "Фріланс")]
        public int FreelanceAvailabilityId { get; set; }

        [ForeignKey("FreelanceAvailabilityId")]
        public virtual FreelanceAvailability FreelanceAvailability { get; set; }

        public virtual List<Education> Educations { get; set; }

        public virtual List<Job> Jobs { get; set; }

        public virtual List<Speciality> Specialities { get; set; }
    }
}
