using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestAppWeb.DTO
{
    public class WorkerDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfCreation { get; set; }
        public DateTime DateOfEdit { get; set; }
        public DateTime DateOfEmployement { get; set; }
        public string Post { get; set; }
        public int DepartmentId { get; set; }
        public DepartmentDto Department { get; set; } = new DepartmentDto();
    }
}
