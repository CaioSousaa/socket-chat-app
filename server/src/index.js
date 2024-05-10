const express = require("express");
const morgan = require("morgan");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(morgan("dev"));

app.listen(5000, () => console.log("Server is run"));
