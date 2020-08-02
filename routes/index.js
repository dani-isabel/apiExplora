const express = require("express");
const experiences = require("./experiences");
const app = express();
app.use("/",experiences);
module.exports = app;