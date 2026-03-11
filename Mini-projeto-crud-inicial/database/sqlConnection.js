import { Sequelize } from "sequelize";
import 'dotenv/config';

// Definimos qué base de datos usar (puedes cambiarlo en el .env)
const DB_TYPE = process.env.DB_TYPE || 'POSTGRES'; 

let sequelize;

if (DB_TYPE === 'SQLITE') {
  // Configuración para SQLite (Crea un archivo local .sqlite)
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/tasks_db.sqlite'
  });
} else {
  // Configuración para PostgreSQL (Tu configuración actual)
  sequelize = new Sequelize(
    process.env.DB,          // tasks_db
    process.env.DBUSER,     // postgres
    process.env.DBPASSWORD, // senai
    {
      host: process.env.DBHOST || "127.0.0.1",
      dialect: "postgres",
      port: 5432,
      logging: false
    }
  );
}

async function connect() {
  try {
    await sequelize.authenticate();
    console.log(`✅ Conexão estabelecida com ${DB_TYPE}`);
  } catch (error) {
    console.error(`❌ Erro ao conectar (${DB_TYPE}):`, error.message);
  }
}

export { sequelize, connect };