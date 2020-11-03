function register(req, res) {
    res.status(200).send(JSON.stringify(req.user));
}

function login(req, res) {
    res.status(200).send(JSON.stringify(req.user));
}

module.exports = {
    register,
    login
}
