const express = require("express");
const { UserSignUp } = require("../controllers");

const router = express.Router();

// user signup route
router.post("/signup", UserSignUp);

module.exports = router;
