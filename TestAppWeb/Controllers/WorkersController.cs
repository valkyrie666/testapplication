using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TestAppWeb.DTO;
using TestAppWeb.Services;

namespace TestAppWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkersController : ControllerBase
    {
        private readonly IWorkerService _workerService;
        public WorkersController(IWorkerService workerService)
        {
            _workerService = workerService;
        }

        [HttpGet("api")]
        public async Task<IEnumerable<WorkerDto>> GetWorkers()
        {
            return await _workerService.GetAll();
        }

        [HttpGet("api/{id}")]
        public async Task<WorkerDto> Get(int id)
        {
            return await _workerService.Get(id);
        }

        [HttpPost("api/create")]
        public void Create([FromBody]WorkerDto worker)
        {
            _workerService.Create(worker);
        }

        [HttpDelete("api/delete/{id}")]
        public void Delete(int id)
        {
            _workerService.Delete(id);
        }

        [HttpPatch("api/update")]
        public void Update([FromBody] WorkerDto worker)
        {
            _workerService.Update(worker);
        }
    }
}
