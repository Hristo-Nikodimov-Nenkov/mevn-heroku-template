const skipFor = [
    "development",
    "test",
    ""
]

function redirectToHttps(req, res, next) {
    if (req.secure) {
        next();
    } else {
        res.redirect('https://' + req.headers.host + req.url);
    }
}

module.exports = function (app) {
    if (!skipFor.includes(process.env.NODE_ENV)) {
        app.use(redirectToHttps);
    }
}
