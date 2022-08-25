const express = require("express");
const { UserSignUp, userLogIn } = require("../controllers/user.controller");

const router = express.Router();

// user signup route
router.post("/signup", UserSignUp);

// user login route
router.post("/login", userLogIn);

module.exports = router;
