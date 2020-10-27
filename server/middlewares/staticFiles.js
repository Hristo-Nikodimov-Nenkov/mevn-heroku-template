const path = require("path");
const staticFiles = require("express").static;

const relativePath = "./../public";
const staticFilesPath = path.resolve(__dirname, relativePath);

module.exports = function (app) {
    app.use(staticFiles(staticFilesPath))
}
