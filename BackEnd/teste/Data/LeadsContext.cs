using System.Collections.Generic;
using LeadsApi.Models;
using Microsoft.EntityFrameworkCore;

namespace LeadsApi.Data
{
    public class LeadsContext : DbContext
    {
        public LeadsContext(DbContextOptions<LeadsContext> options) : base(options) { }
        public DbSet<Lead> Leads { get; set; }
    }
}
