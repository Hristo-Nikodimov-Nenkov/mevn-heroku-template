const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = function (app){
    app.use(bodyParser.json());
    app.use(cors());
    app.use(express.static(path.resolve(__dirname ,"./../public/")));
}
