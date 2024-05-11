const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("../src/routes/userRoutes");
const chatsRoutes = require("../src/routes/chatRoutes");
const messageRoutes = require("../src/routes/messageRoutes");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/chats", chatsRoutes);
app.use("/api/messages", messageRoutes);

mongoose.connect(
  "mongodb+srv://mongo:12345@cluster0.spphilp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(3333, () => console.log("Server is run"));
