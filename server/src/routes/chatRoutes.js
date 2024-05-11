const express = require("express");
const { createChat } = require("../controllers/chat/crateChat");
const { findUsersChats } = require("../controllers/chat/findUsersChats");
const { findChats } = require("../controllers/chat/findChats");

const router = express.Router();

router.post("/", createChat);
router.get("/:userId", findUsersChats);
router.get("/find/:firstId/:secondId", findChats);

module.exports = router;
