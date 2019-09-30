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

        public DbSet<Value> Values { get; set; }

        //Overrides the based method from DBContext to create a SQLite with data at the runtime
        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder will work with entity of type Value from Domain and put some Value objects
            builder.Entity<Value>()
            .HasData(
                new Value { Id = 1, Name = "Value 101" },
                new Value { Id = 2, Name = "Value 102" },
                new Value { Id = 3, Name = "Value 103" }
            );
        }
    }
}
