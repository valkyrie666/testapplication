using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestAppWeb.DTO;
using TestAppWeb.Services;

namespace TestAppWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DepartmentsController : Controller
    {
        private readonly IDepartmentService _service;
        public DepartmentsController(IDepartmentService service)
        {
            _service = service;
        }

        [HttpGet("api")]
        public async Task<IEnumerable<DepartmentDto>> GetDepartments()
        {
            return await _service.Get();
        }

        [HttpGet("api/{id}")]
        public async Task<DepartmentDto> Get(int id)
        {
            return await _service.GetAll(id);
        }

        [HttpPost("api/create")]
        public void Create([FromBody] DepartmentDto department)
        {
            _service.Create(department);
        }

        [HttpDelete("api/delete/{id}")]
        public void Delete(int id)
        {
            _service.Delete(id);
        }

        [HttpPatch("api/update")]
        public void Update([FromBody] DepartmentDto department)
        {
            _service.Update(department);
        }
    }
}