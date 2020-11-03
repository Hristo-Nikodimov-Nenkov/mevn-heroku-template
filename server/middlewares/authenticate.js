const jwt = require("jsonwebtoken");
const jwtConfigs = require("./../configs").jwt;

function authenticate(req, res, next) {
    if (req.signedCookies.authCookie) {
        jwt.verify(
            req.signedCookies.authCookie,
            jwtConfigs.secret,
            (err, payload) => {
                if (err) {
                    console.log(err);
                }

                if (payload && payload.keys.length > 0) {
                    req.user = payload
                }
            }
        )
    }

    next();
}

export default function (app) {
    app.use(authenticate);
}
