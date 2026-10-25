using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nexa.Api.Data;
using Nexa.Api.Dtos;
using Nexa.Api.Models;

namespace Nexa.Api.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly NexaDbContext _db;

    public AuthController(NexaDbContext db)
    {
        _db = db;
    }

    [HttpPost("registro")]
    public async Task<ActionResult<UsuarioRespuesta>> Registro(RegistroRequest solicitud)
    {
        var rolNombre = solicitud.Rol.Trim().ToLowerInvariant();
        if (rolNombre != "comprador" && rolNombre != "vendedor")
        {
            return BadRequest(new { mensaje = "El rol debe ser 'comprador' o 'vendedor'." });
        }

        var correo = solicitud.Correo.Trim().ToLowerInvariant();
        var existe = await _db.Usuarios.AnyAsync(u => u.Correo == correo);
        if (existe)
        {
            return Conflict(new { mensaje = "Ya existe una cuenta con ese correo." });
        }

        var rol = await _db.Roles.SingleAsync(r => r.Nombre == rolNombre);

        var usuario = new Usuario
        {
            Nombre = solicitud.Nombre.Trim(),
            Correo = correo,
            ContrasenaHash = BCrypt.Net.BCrypt.HashPassword(solicitud.Contrasena),
            RolId = rol.Id
        };

        _db.Usuarios.Add(usuario);
        await _db.SaveChangesAsync();

        var respuesta = new UsuarioRespuesta(usuario.Id, usuario.Nombre, usuario.Correo, rol.Nombre);
        return Created($"/api/usuarios/{usuario.Id}", respuesta);
    }
}