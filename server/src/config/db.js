const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    process.exit(1);
  } else {
    console.log('✅ Conectado a la base de datos');
    connection.release();
  }
});

module.exports = pool
