const express = require("express");
const { registerUser } = require("../controllers/user/createUser");

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
