const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const translateText = require("../services/translate");

// Create a new blog
router.post("/", async (req, res) => {
  try {
    const { title, content, language, author, userId } = req.body;
    const translated = await translateText(content, language);

    const newBlog = new Blog({
      title,
      content: translated,
      author,
      language,
      userId
    });

    await newBlog.save();
    res.status(201).json({ message: "✅ Blog saved and translated", blog: newBlog });
  } catch (err) {
    console.error("Blog submission error:", err);
    res.status(500).json({ message: "❌ Blog submission failed" });
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ message: "❌ Error fetching blogs" });
  }
});

// React to a blog
router.post("/:id/react", async (req, res) => {
  try {
    const { type } = req.body;
    const validTypes = ["fire", "heart", "laugh"];

    if (!validTypes.includes(type)) {
      return res.status(400).json({ message: "Invalid reaction type" });
    }

    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    blog.reactions[type] += 1;
    await blog.save();

    res.json({ message: "Reaction updated", reactions: blog.reactions });
  } catch (err) {
    console.error("Reaction error:", err);
    res.status(500).json({ message: "Failed to react" });
  }
});

module.exports = router;
