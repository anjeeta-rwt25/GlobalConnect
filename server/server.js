const express = require("express");
const cors = require("cors"); // ✅ only once!
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");


dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());
app.use("/api/blogs", blogRoutes);


// ✅ Connect Mongo
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(5000, () => console.log('🚀 Server running on port 5000'));
}).catch((err) => {
  console.error('❌ MongoDB error:', err);
});
