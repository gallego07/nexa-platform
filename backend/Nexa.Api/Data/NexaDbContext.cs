using Microsoft.EntityFrameworkCore;
using Nexa.Api.Models;

namespace Nexa.Api.Data;

public class NexaDbContext : DbContext
{
    public NexaDbContext(DbContextOptions<NexaDbContext> options) : base(options)
    {
    }

    public DbSet<Rol> Roles => Set<Rol>();
    public DbSet<Usuario> Usuarios => Set<Usuario>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Rol>().HasIndex(r => r.Nombre).IsUnique();

        modelBuilder.Entity<Usuario>()
            .HasOne(u => u.Rol)
            .WithMany(r => r.Usuarios)
            .HasForeignKey(u => u.RolId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Rol>().HasData(
            new Rol { Id = 1, Nombre = "administrador" },
            new Rol { Id = 2, Nombre = "vendedor" },
            new Rol { Id = 3, Nombre = "comprador" }
        );
    }
}