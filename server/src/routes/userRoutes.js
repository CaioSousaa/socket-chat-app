const express = require("express");
const { registerUser } = require("../controllers/user/createUser");
const { loginUser } = require("../controllers/user/loginUser");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
