using Microsoft.EntityFrameworkCore;
using TestAppWeb.Models;

namespace TestAppWeb
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Worker> Workers { get; set; }
        public DbSet<Department> Departments { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options): base(options)
        {
            //Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
    }
}
