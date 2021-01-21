using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestAppWeb.DTO
{
    public class DepartmentDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfCreation { get; set; }
        public DateTime DateOfEdit { get; set; }
        public List<WorkerDto> Workers { get; set; } = new List<WorkerDto>();
    }
}
