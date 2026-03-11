import { Sequelize } from "sequelize";
import 'dotenv/config';


const database = process.env.DB;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST || "127.0.0.1";

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: "postgres",
  port: 5432,
  logging: false, 
  define: {
    timestamps: true, 
    underscored: true 
  }
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexão com PostgreSQL estabelecida");
  } catch (error) {
    console.error("❌ Erro ao conectar no SQL:", error.message);
  }
}

export { sequelize, connect };