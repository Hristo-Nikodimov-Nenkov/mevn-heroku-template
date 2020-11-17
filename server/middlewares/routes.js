const {common} = require("./../configs");
const {account} = require("./../routers");

const fallback = (req, res) => {
    res.sendFile(common.indexHtml);
}

module.exports = function (app) {
    app.use("/account", account);

    app.use(/.*/, fallback);
}
