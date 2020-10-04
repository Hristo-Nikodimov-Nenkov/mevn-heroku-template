const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + "/public/"))

app.use(/.*/, () => __dirname + "public/index.html")

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port: ${port}`));
