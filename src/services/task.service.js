const Task = require("../models/task.model");

const getAllTasks = async () => await Task.find();

const createTask = async (data) => await Task.create(data);

const updateTask = async (id, data) =>
  await Task.findByIdAndUpdate(id, data, { new: true });

const deleteTask = async (id) => await Task.findByIdAndDelete(id);

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};