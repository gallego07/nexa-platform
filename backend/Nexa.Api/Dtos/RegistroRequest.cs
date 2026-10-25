using System.ComponentModel.DataAnnotations;

namespace Nexa.Api.Dtos;

public class RegistroRequest
{
    [Required, MinLength(2), MaxLength(100)]
    public string Nombre { get; set; } = string.Empty;

    [Required, EmailAddress, MaxLength(150)]
    public string Correo { get; set; } = string.Empty;

    [Required, MinLength(8), MaxLength(100)]
    public string Contrasena { get; set; } = string.Empty;

    [Required]
    public string Rol { get; set; } = string.Empty;
}