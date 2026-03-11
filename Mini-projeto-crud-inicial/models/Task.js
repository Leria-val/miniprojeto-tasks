import { DataTypes } from "sequelize";
import { sequelize } from "../database/sqlConnection.js";

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false, // Campo obligatorio
  },
  description: {
    type: DataTypes.STRING, // Opcional por defecto
    allowNull: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

export default Task;