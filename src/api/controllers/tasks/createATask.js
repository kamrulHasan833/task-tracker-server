const TaskModel = require("../../../models/Task");

const createATask = async (req, res) => {
  try {
    const payload = req?.body;
    const newTask = new TaskModel(payload);
    const result = await newTask.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: err?.message,
    });
  }
};

module.exports = createATask;
