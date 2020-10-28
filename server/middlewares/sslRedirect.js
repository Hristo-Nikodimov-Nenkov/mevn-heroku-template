const sslRedirect = require("heroku-ssl-redirect");

module.exports = function (app) {
    app.use(sslRedirect(['production'], 301));
}
