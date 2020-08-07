const express = require("express");
const experiences = require("./experiences");
const path = require('path');
const app = express();
app.use("/",experiences);
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
module.exports = app;