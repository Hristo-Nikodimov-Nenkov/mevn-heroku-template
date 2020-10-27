const cookieParser = require("cookie-parser");
const {cookies} = require("./../configs");

module.exports = function (app) {
    app.use(cookieParser(cookies.secret, cookies.options));
}
