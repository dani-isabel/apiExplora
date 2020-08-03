const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const confi = require('./configuration/confi.json');
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(confi.PORT, () => console.log("Listening in the port 4000"));