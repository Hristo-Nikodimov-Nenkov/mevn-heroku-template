const {common} = require("./../configs");

const fallback = (req, res) => {
    res.sendFile(common.indexHtml);
}

module.exports = function (app) {
    app.use(/.*/, fallback);
}
