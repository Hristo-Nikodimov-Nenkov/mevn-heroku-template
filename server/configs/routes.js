const {accountsRouter, apiRouter} = require("./../routers");
const path = require("path");

module.exports = function (app) {
    app.use("/accounts", accountsRouter);
    app.use("/api", apiRouter);
    app.use(/.*/, (req, res) =>
        res.sendFile(path.resolve(__dirname, "./../public/index.html")));
}
