require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/user.routes");

const app = express();

// middlewares
app.use(express.json());
app.use("/api", userRoute);

const PORT = process.env.PORT || 1000;

app.listen(PORT, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error.message);
  }
  console.log(`Server running on ${PORT}`);
});
