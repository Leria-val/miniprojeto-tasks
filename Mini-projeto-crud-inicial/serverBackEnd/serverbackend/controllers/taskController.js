import Task from "../models/Task.js";

const taskController = {
  // CREATE
  create: async (req, res) => {
    try {
      const { title, description } = req.body;
      if (!title) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "O título é obrigatório"
        });
      }
      const task = await Task.create({ title, description });
      return res.status(201).json({
        success: true,
        data: task,
        message: "Task criada com sucesso"
      });
    } catch (error) {
      res.status(500).json({ success: false, data: null, message: error.message });
    }
  },

  // READ ALL
  getAll: async (req, res) => {
    try {
      const tasks = await Task.findAll();
      res.status(200).json({
        success: true,
        data: tasks,
        message: "Tasks listadas com sucesso"
      });
    } catch (error) {
      res.status(500).json({ success: false, data: null, message: error.message });
    }
  },

  // READ BY ID
  getById: async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.status(404).json({
          success: false,
          data: null,
          message: "Task não encontrada"
        });
      }
      res.status(200).json({ success: true, data: task, message: "Task encontrada" });
    } catch (error) {
      res.status(500).json({ success: false, data: null, message: error.message });
    }
  },

  // UPDATE
  update: async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.status(404).json({ success: false, data: null, message: "Task não encontrada" });
      }
      await task.update(req.body);
      res.status(200).json({ success: true, data: task, message: "Task atualizada" });
    } catch (error) {
      res.status(500).json({ success: false, data: null, message: error.message });
    }
  },

  // DELETE
  delete: async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.status(404).json({ success: false, data: null, message: "Task não encontrada" });
      }
      await task.destroy();
      res.status(200).json({ success: true, data: null, message: "Task deletada com sucesso" });
    } catch (error) {
      res.status(500).json({ success: false, data: null, message: error.message });
    }
  }
};

export default taskController;