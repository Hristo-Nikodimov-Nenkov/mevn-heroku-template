function registerGet(req, res) {
    res.send("Send the client request-forgery-token");
}

function registerPost(req, res) {
    res.send("Register new User");
}

function loginPost(req, res) {
    res.send("Return JWT as cesure http-only cookie");
}

function profileGet(req, res) {
    res.send("Send User's profile information if authorized!");
}

module.exports = {
    registerGet,
    registerPost,
    loginPost,
    profileGet
}
