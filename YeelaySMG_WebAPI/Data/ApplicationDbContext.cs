using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
    {

    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // modelBuilder.Entity<Company>().ToTable("Company");
        // modelBuilder.Entity<Contact>().ToTable("Contact");
        // modelBuilder.Entity<BusinessEnrollment>().ToTable("BusinessEnrollment");
        // modelBuilder.Entity<Trace>().ToTable("Trace");

    }
        

}