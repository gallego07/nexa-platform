using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Nexa.Api.Models;

[Index(nameof(Correo), IsUnique = true)]
public class Usuario
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Nombre { get; set; } = string.Empty;

    [Required]
    [MaxLength(150)]
    public string Correo { get; set; } = string.Empty;

    [Required]
    public string ContrasenaHash { get; set; } = string.Empty;

    public int RolId { get; set; }
    public Rol Rol { get; set; } = null!;

    public bool Activo { get; set; } = true;

    public DateTime FechaCreacion { get; set; } = DateTime.UtcNow;
}