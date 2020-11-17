const token = require("jsonwebtoken");
const {jwt, cookies} = require("./../configs");

function getToken(user) {
    return token.sign(
        user,
        jwt.secret,
        jwt.options);
}

function setAuthenticationCookie(response, user) {
    const token = getToken(user);

    if (token) {
        response.cookie(
            cookies.tokenCookieName,
            token,
            cookies.options
        );

        return;
    }

    response.clearCookie(cookies.tokenCookieName);
}

function authenticate(req, res, next) {
    const authCookie = req.cookies[cookies.tokenCookieName] || req.signedCookies[cookies.tokenCookieName];

    if (authCookie) {
        const user = token.verify(authCookie, jwt.secret, jwt.options);

        if (user) {
            req.user = user;
        }
    }

    next();
}

function authenticated(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.clearCookie(cookies.tokenCookieName);
        res.status(401).send();
    }
}

module.exports = {
    authenticate,
    setAuthenticationCookie,
    authenticated
}
