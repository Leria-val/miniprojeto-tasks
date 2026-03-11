import express, { json } from "express";
import { connect, sequelize } from "./database/sqlConnection.js";
import taskRouter from "./routes/taskRoutes.js";
import Task from "./models/Task.js";
import 'dotenv/config';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(json());

// Tus rutas principales
app.use('/tasks', taskRouter);

// Ruta para resetear/sincronizar el banco de datos (Útil para pruebas)
app.get("/sync", async (req, res) => {
  try {
    // force: true borra las tablas y las recrea. Úsalo solo en desarrollo.
    await sequelize.sync({ force: true });

    // Creamos una tarea de ejemplo con los campos CORRECTOS
    await Task.create({
      title: "Estudar Sequelize",
      description: "Finalizar o mini-projeto de Tasks",
      completed: false
    });

    res.json({ 
      success: true, 
      message: "Banco sincronizado e dados de teste criados!" 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ 
      success: false, 
      message: "Erro ao sincronizar: " + err.message 
    });
  }
});

app.listen(PORT, () => {
  connect();
  console.log(` Servidor rodando no link http://localhost:${PORT}`);
});