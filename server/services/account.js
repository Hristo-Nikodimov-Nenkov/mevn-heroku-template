function register(req, res) {
    res.status(200).send(JSON.stringify(req.user));
}

const jsonwebtoken = require("jsonwebtoken");
const {jwt, cookies} = require("./../configs");

function login(req, res) {
    res.cookie("authCookie", jsonwebtoken.sign(req.body, jwt.secret, jwt.options, (err, token) => {
        if (!err && token) {
            res.cookie("authCookie", token, cookies.options);
            res.status(200).send();
        }
    }));
}

module.exports = {
    register,
    login
}
