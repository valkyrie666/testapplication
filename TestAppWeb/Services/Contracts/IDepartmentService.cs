using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestAppWeb.DTO;

namespace TestAppWeb.Services
{
    public interface IDepartmentService
    {
        Task<List<DepartmentDto>> Get();
        Task<DepartmentDto> GetAll(int id);
        void Create(DepartmentDto department);
        void Delete(int id);
        void Update(DepartmentDto department);
    }
}
