const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    language: { type: String, required: true },
    userId: { type: String, required: true },
    reactions: {
      fire: { type: Number, default: 0 },
      heart: { type: Number, default: 0 },
      laugh: { type: Number, default: 0 }
    }
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

module.exports = mongoose.model("Blog", blogSchema);
