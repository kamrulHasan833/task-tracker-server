const express = require("express");
const taskRouter = express.Router();
const { createATask } = require("../api/controllers/tasks/index");

taskRouter.post("/tasks", createATask);
module.exports = taskRouter;
