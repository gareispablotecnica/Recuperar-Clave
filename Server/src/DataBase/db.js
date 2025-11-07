const SQLite= require('sqlite3').verbose();
const path= require('path');

const dbUbicacion= path.resolve(__dirname, './database.db');

const db= new SQLite.Database(dbUbicacion, (Error) => {
    if (Error) {
        console.error('Error al Conectar a la Base de Datos: ⛔', Error);
    } else {
        console.log('Conexión a la Base de Datos establecida ✅');
        db.run(`CREATE TABLE IF NOT EXISTS Usuarios (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Nombre TEXT NOT NULL,
            Email TEXT NOT NULL UNIQUE,
            Password TEXT NOT NULL
        )`, (Error) => {
            if (Error) {
                console.error('Error al crear la tabla de usuarios: ⛔', Error);
            } else {
                console.log('Tabla de usuarios creada ✅');
            }
        }); 
    }
});

module.exports= db;