const express = require("express");
const { registerUser } = require("../controllers/user/createUser");
const { loginUser } = require("../controllers/user/loginUser");
const { findUser } = require("../controllers/user/findUserById");
const { getUsers } = require("../controllers/user/findUser");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);
router.get("/", getUsers);

module.exports = router;
