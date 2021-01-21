using System;
using System.ComponentModel.DataAnnotations;

namespace TestAppWeb.Models
{
    public class Worker
    {
        public int Id { get; set; }
        [Required]
        public int DepartmentId { get; set; }
        [Required]
        public string Name { get; set; }
        public DateTime DateOfCreation { get; set; }
        public DateTime DateOfEdit { get; set; }
        public DateTime DateOfEmployement { get; set; }
        public string Post { get; set; }
    }
}
