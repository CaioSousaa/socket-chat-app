const express = require("express");
const { createMessage } = require("../controllers/message/createMessage");
const { getMessages } = require("../controllers/message/getMessages");

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatId", getMessages);

module.exports = router;
