require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

const PORT = process.env.PORT || 1000;

app.listen(PORT, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log("error", error.message);
  }
  console.log(`Server running on port ${PORT}`);
});
