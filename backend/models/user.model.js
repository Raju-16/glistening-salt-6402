const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    mobile: {
      type: String,
    },
    refcode: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
