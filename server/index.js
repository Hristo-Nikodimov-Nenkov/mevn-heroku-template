const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.resolve(__dirname ,"./public/")));

require("./configs/middlewares")(app);
require("./configs/routes")(app);
require("./configs/server")(app);
