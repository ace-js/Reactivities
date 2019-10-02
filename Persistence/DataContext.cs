using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities { get; set; }

        //Overrides the based method from DBContext to create a SQLite with data at the runtime
        protected override void OnModelCreating(ModelBuilder builder)
        {

        }
    }
}
