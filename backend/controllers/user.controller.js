const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// signup controller
const UserSignUp = async (req, res) => {
  try {
    const { fullname, email, passoword, mobile } = req.body;
    console.log(fullname, email, passoword, mobile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { UserSignUp };
