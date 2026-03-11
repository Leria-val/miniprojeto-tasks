import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexão com SQLite estabelecida (Sem erros de porta!)");
  } catch (error) {
    console.error("❌ Erro ao conectar:", error.message);
  }
}

export { sequelize, connect };