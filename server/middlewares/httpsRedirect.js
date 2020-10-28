const skipFor = [
    "development",
    "test",
    ""
]

function redirectToHttps(req, res, next) {
    if (!req.secure) {
        res.redirect(301, 'https://' + req.headers.host + req.url);
    }

    next();
}

module.exports = function (app) {
    if (!skipFor.includes(process.env.NODE_ENV)) {
        app.use(redirectToHttps);
    }
}
