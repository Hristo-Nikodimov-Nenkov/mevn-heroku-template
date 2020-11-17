const {security} = require("./../services");

module.exports = function (app) {
    app.use(security.authenticate);
}
