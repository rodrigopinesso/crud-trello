const taskService = require("../services/task.service");

const getAll = async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};

const create = async (req, res) => {
  const task = await taskService.createTask(req.body);
  res.status(201).json(task);
};

const update = async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.body);
  task ? res.json(task) : res.status(404).json({ message: "Tarefa não encontrada" });
};

const remove = async (req, res) => {
  const task = await taskService.deleteTask(req.params.id);
  task ? res.json({ message: "Tarefa removida" }) : res.status(404).json({ message: "Tarefa não encontrada" });
};

module.exports = { getAll, create, update, remove };