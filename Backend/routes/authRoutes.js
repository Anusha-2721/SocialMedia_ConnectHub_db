const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser
} = require("../controllers/authController");

// Register
router.post("/registerUser", registerUser);

// Login
router.post("/loginUser", loginUser);

module.exports = router;