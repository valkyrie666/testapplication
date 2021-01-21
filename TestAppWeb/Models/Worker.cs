using System;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace TestAppWeb.Models
{
    public class Worker
    {
        public int Id { get; set; }
        [AllowNull]
        public int DepartmentId { get; set; }
        [Required]
        public string Name { get; set; }
        public DateTime DateOfCreation { get; set; }
        public DateTime DateOfEdit { get; set; }
        public DateTime DateOfEmployement { get; set; }
        public string Post { get; set; }
    }
}
