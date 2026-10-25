USE NexaDb;
GO

SELECT * FROM Roles;
SELECT * FROM Usuarios;

SELECT u.Id, u.Nombre, u.Correo, u.ContrasenaHash, r.Nombre AS Rol
FROM Usuarios u
JOIN Roles r ON r.Id = u.RolId;