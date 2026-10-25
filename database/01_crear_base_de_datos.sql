-- NEXA: crear la base de datos
IF DB_ID(N'NexaDb') IS NULL
BEGIN
    CREATE DATABASE NexaDb;
END
GO