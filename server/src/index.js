const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors);

mongoose.connect(
  "mongodb+srv://mongo:12345@cluster0.spphilp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(5000, () => console.log("Server is run"));
