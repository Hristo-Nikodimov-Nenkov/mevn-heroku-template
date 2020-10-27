const path = require("path");

module.exports = function (app) {
    app.use(/.*/, (req, res) =>
        res.sendFile(path.resolve(__dirname, "./../public/index.html")));
}
