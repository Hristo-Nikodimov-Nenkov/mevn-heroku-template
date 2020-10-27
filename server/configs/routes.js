const common = require("./common");

const fallback = (req, res) =>{
    res.sendFile(common.indexHtml);
}

module.exports = function (app) {
    app.use(/.*/, fallback);
}
