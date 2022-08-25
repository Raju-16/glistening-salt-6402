const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// signup controller
const UserSignUp = async (req, res) => {
  try {
    const {
      fullname,
      email,
      emailcheck,
      password,
      passwordcheck,
      mobile,
      refcode,
    } = req.body;
    if (!fullname || !email || !emailcheck || !password || !passwordcheck) {
      return res.status(400).json({ msg: "All fields are mandatory" });
    }

    // Confirming email address match
    if (email !== emailcheck) {
      return res.status(400).json({ msg: "Both email addresses must match" });
    }

    // Checking user with this email address present or not
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ msg: "An account with this email address is already present" });
    }

    // Checking password match
    if (password !== passwordcheck) {
      return res.status(400).json({ msg: "Both passwords must match" });
    }

    // Checking password length;
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: "Password needs to be atleast 6 characters long" });
    }

    // Hashing the password using bcrypt;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Creating new user with password has value
    const newUser = new User({
      fullname,
      email,
      password: passwordHash,
      mobile,
      refcode,
    });
    const user = await newUser.save();
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login controller
const userLogIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate
    if (!email || !password) {
      return res.status(400).json({ mag: "All fields are mandatory" });
    }

    // Checking email is present or not
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });
    }

    // Checking password enntered and comparing hashed password in database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ mag: "Invalid credentials" });
    }

    // Creating our json web token by passing the user id and our JWT_SECRET
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      _id: user._id,
      // user: {
      //   _id: user._id,
      //   fullname: user.fullname,
      //   email: user.email,
      //   mobile: user.email,
      // },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { UserSignUp, userLogIn };
