const SQLite= require('sqlite3').verbose();
const path= require('path');

const dbUbicacion= path.resolve(__dirname, './database.db');

const db= new SQLite.Database(dbUbicacion, (Error) => {
    if (Error) {
        console.error('Error al Conectar a la Base de Datos: ⛔', Error);
    } else {
        console.log('Conexión a la Base de Datos establecida ✅');
        asasasa
    }
});

module.exports= db;