const {account, security} = require("./../services");
const {cookies} = require("./../configs");

function register(req, res) {
    account.registerAsync(req.body)
        .then((user) => {
            res.status(201).send(user);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
}

async function login(req, res) {
    try {
        const user = await account.loginAsync(req.body);
        if (user) {
            security.setAuthenticationCookie(res, user);
            res.status(200).send(user);
        }
    } catch (err) {
        res.status(400).send(err);
    }
}

function logout(req, res){
    res.clearCookie(cookies.tokenCookieName);
    res.status(200).send();
}

function profile(req, res) {
    res.status(200).send(req.user);
}

module.exports = {
    register,
    login,
    logout,
    profile
}
