const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const blogRoutes = require('./routes/blogRoutes');

const app = express();

// CORS setup
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors());

// Parse JSON
app.use(express.json());

// Routes
app.use('/api/blogs', blogRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);
  res.status(500).json({ error: "Internal Server Error", details: err.message });
});

// MongoDB connection
const connectDB = async () => {
  try {
    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI); // No deprecated options needed
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Stop server if DB can't connect
  }
};

connectDB();

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`💻 Server running on port ${PORT}`));
