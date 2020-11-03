function register(req, res) {
    res.status(200).send(JSON.stringify(req.user));
}

const jsonwebtoken = require("jsonwebtoken");
const {jwt, cookies} = require("./../configs");

function login(req, res) {
    res.cookie(cookies.tokenCookieName, jsonwebtoken.sign(req.body, jwt.secret, jwt.options, (err, token) => {
        if (!err && token) {
            res.cookie(cookies.tokenCookieName, token, cookies.options);
            res.status(200).send(req.body);
        }
    }));
}

module.exports = {
    register,
    login
}
