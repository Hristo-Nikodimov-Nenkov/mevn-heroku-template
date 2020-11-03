const jwt = require("jsonwebtoken");
const jwtConfigs = require("./../configs").jwt;

function authenticate(req, res, next) {
    console.log(`Cookies = ${JSON.stringify(req.cookies)}`);
    console.log(`SignedCookies = ${JSON.stringify(req.signedCookies)}`);

    const authCookie = req.cookies.authCookie || req.signedCookies.authCookie;

    if (authCookie) {
        jwt.verify(
            authCookie,
            jwtConfigs.secret,
            (err, payload) => {
                if (err) {
                    console.log(err);
                }

                if (payload) {
                    req.user = payload;
                }
            }
        )
    }

    next();
}

module.exports = function (app) {
    app.use(authenticate);
}
