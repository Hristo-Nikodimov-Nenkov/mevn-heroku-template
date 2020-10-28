const herokuSslRedirect = require("heroku-ssl-redirect");

module.exports = function (app) {
    app.use(herokuSslRedirect());
}
