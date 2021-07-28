using System;
using System.ComponentModel.DataAnnotations;

namespace WebView.Models
{
    public class User
    {
        public Guid UserId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int UnitNumber { get; set; }
        [Required]
        public UnitType UnitType { get; set; }
        [Required]
        public string Council { get; set; }
    }

    public enum UnitType
    {
        Pack,
        Troop
    }
}