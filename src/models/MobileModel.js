const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  processor: {
    type: String,
    require: true,
  },
  memory: {
    type: String,
    require: true,
  },
  os: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
  },
  desc: {
    type: String,
    require: true,
  },
});

const MobileModel = mongoose.model("Mobile", schema);
module.exports = MobileModel;
