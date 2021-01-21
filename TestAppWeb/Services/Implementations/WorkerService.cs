using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestAppWeb.DTO;
using TestAppWeb.Models;

namespace TestAppWeb.Services
{
    public class WorkerService : IWorkerService
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _autoMapper;
        public WorkerService(ApplicationContext context, IMapper autoMapper)
        {
            _context = context;
            _autoMapper = autoMapper;
        }

        public async Task<List<WorkerDto>> GetAll()
        {
            try
            {
                List<WorkerDto> result = new List<WorkerDto>();
                var workers = _context.Workers.ToList();
                foreach (var worker in workers)
                {
                    var dto = _autoMapper.Map<WorkerDto>(worker);
                    var department = _context.Departments.FirstOrDefault(x => x.Id.Equals(worker.DepartmentId));
                    dto.Department = _autoMapper.Map<DepartmentDto>(department);
                    result.Add(dto);
                }
                return result;
            }
            catch (Exception)
            {
                return new List<WorkerDto>();
            }
        }

        public async Task<WorkerDto> Get(int id)
        {
            var worker = await _context.Workers.FirstOrDefaultAsync(x => x.Id.Equals(id));
            var department = await _context.Departments.FirstOrDefaultAsync(x => x.Id.Equals(worker.DepartmentId));
            var dto = _autoMapper.Map<WorkerDto>(worker);
            dto.Department = _autoMapper.Map<DepartmentDto>(department);
            return dto;
        }

        public void Create(WorkerDto worker)
        {
            var model = _autoMapper.Map<Worker>(worker);
            _context.Workers.Add(model);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var worker = _context.Workers.FirstOrDefault(x => x.Id.Equals(id));

            if (worker != null)
            {
                _context.Workers.Remove(worker);
                _context.SaveChanges();
            }
        }

        public void Update(WorkerDto worker)
        {
            var workerToUpdate = _context.Workers.FirstOrDefault(x => x.Id.Equals(worker.Id));
            if (workerToUpdate == null) return;

            workerToUpdate.Name = worker.Name;
            workerToUpdate.Post = worker.Post;
            workerToUpdate.DateOfEdit = worker.DateOfEdit;
            workerToUpdate.DepartmentId = worker.DepartmentId;

            _context.Workers.Update(workerToUpdate);
            _context.SaveChanges();
        }
    }
}
