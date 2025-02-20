require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD),  // Garante que a senha seja string
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: false, // Se estiver usando localmente, deixe false
});

pool.connect()
  .then(() => console.log("Banco de dados conectado!"))
  .catch((err) => console.error("Erro ao conectar ao PostgreSQL", err));

module.exports = pool;
