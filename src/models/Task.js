const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },
  deadline: {
    type: Number,
    require: true,
  },

  priority: {
    type: String,
    require: true,
    enum: ["low", "moderate", "high"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TaskModel = mongoose.model("Task", schema);
module.exports = TaskModel;
