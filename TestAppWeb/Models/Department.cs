using System;
using System.ComponentModel.DataAnnotations;

namespace TestAppWeb.Models
{
    public class Department
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public DateTime DateOfCreation { get; set; }
        public DateTime DateOfEdit { get; set; }
    }
}
