const staticFiles = require("express").static;
const {common} = require("./../configs");

module.exports = function (app) {
    app.use(staticFiles(common.staticFiles));
}
