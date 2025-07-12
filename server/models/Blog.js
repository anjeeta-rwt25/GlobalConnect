const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  language: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  reactions: {
    fire: { type: Number, default: 0 },
    heart: { type: Number, default: 0 },
    laugh: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model("Blog", blogSchema);
