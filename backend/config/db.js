const mongoose = require("mongoose");
require("dotenv").config;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connection Success");
  } catch (error) {
    console.log("MongoDB Connection Failure");
    process.exit(1);
  }
};

module.exports = connectDB;
