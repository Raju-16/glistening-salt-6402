const express = require("express");
const { UserSignUp } = require("../controllers/user.controller");

const router = express.Router();

// User SignUp Route
router.post("/signup", UserSignUp);

module.exports = router;
