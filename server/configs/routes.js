const path = require("path");
const apiRouter = require("./../routers/apiRouter");

module.exports = function (app){
    app.use("/api", apiRouter);
    app.use(/.*./, (req, res) =>
        res.sendFile(path.resolve(__dirname, "../public/index.html"))
    );
}
