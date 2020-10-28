const sslRedirect = require("heroku-ssl-redirect");

module.exports = function (app) {
    if (process.env.NODE_ENV === "production") {
        app.use(sslRedirect());
    }
}
