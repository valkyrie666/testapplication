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
    public class DepartmentService : IDepartmentService
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _autoMapper;

        public DepartmentService(ApplicationContext context, IMapper autoMapper)
        {
            _context = context;
            _autoMapper = autoMapper;
        }

        public void Create(DepartmentDto department)
        {
            var model = _autoMapper.Map<Department>(department);
            _context.Departments.Add(model);
            _context.SaveChanges();
        }

        public async Task<DepartmentDto> GetAll(int id)
        {
            var department = await _context.Departments.FirstOrDefaultAsync(x => x.Id.Equals(id));
            var workers = _context.Workers
                .Where(x => x.DepartmentId.Equals(id))
                .Select(x => _autoMapper.Map<WorkerDto>(x))
                .ToList();
            var departmentDto = _autoMapper.Map<DepartmentDto>(department);
            departmentDto.Workers = workers;
            return departmentDto;
        }

        public async Task<List<DepartmentDto>> Get()
        {
            try
            {
                return _context.Departments.Select(x => _autoMapper.Map<DepartmentDto>(x)).ToList();
            }
            catch (Exception)
            {
                return new List<DepartmentDto>();
            }
        }

        public void Delete(int id)
        {
            var department = _context.Departments.FirstOrDefault(x => x.Id.Equals(id));
            if (department != null)
            {
                var workersRange = _context.Workers.Where(x => x.DepartmentId.Equals(id)).ToList();

                if (workersRange != null) _context.Workers.RemoveRange(workersRange);

                _context.Departments.Remove(department);
                _context.SaveChanges();
            }
        }

        public void Update(DepartmentDto department)
        {
            var departmentToUpdate = _context.Departments.FirstOrDefault(x => x.Id.Equals(department.Id));
            if (departmentToUpdate == null) return;

            departmentToUpdate.Name = department.Name;
            departmentToUpdate.DateOfEdit = department.DateOfEdit;

            _context.Departments.Update(departmentToUpdate);
            _context.SaveChanges();
        }
    }
}
