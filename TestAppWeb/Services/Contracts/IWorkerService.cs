using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestAppWeb.DTO;
using TestAppWeb.Models;

namespace TestAppWeb.Services
{
    public interface IWorkerService
    {
        Task<List<WorkerDto>> GetAll();
        Task<WorkerDto> Get(int id);
        void Create(WorkerDto worker);
        void Delete(int id);
        void Update(WorkerDto worker);
    }
}
