using System.ComponentModel.DataAnnotations;

namespace Nexa.Api.Models;

public class Rol
{
    public int Id { get; set; }

    [Required]
    [MaxLength(30)]
    public string Nombre { get; set; } = string.Empty;

    public ICollection<Usuario> Usuarios { get; set; } = new List<Usuario>();
}