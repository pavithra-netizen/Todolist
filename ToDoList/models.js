const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    isDone:{
      type:Boolean
    }
  
  });
  
  const Task = mongoose.model("tasks", UserSchema);
  
  module.exports = Task;