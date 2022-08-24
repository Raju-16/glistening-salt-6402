const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup Controller
const UserSignUp = async (req, res) => {
  try {
    const { fullname, email, password, mobile } = req.body;
    console.log(fullname, email, password, mobile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { UserSignUp };
