const token = require("jsonwebtoken");
const {jwt, cookies} = require("./../configs");

function authenticate(req, res, next) {
    console.log(`Cookies = ${JSON.stringify(req.cookies)}`);
    console.log(`SignedCookies = ${JSON.stringify(req.signedCookies)}`);

    const authCookie = req.cookies[cookies.tokenCookieName] || req.signedCookies[cookies.tokenCookieName];

    if (authCookie) {
        token.verify(
            authCookie,
            jwt.secret,
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
