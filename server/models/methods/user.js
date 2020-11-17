const crypto = require("crypto");

const passwordSaltLength = 16;
const passwordHashLength = 64;
const algorithm = "SHA512"
const iterations = 12345;

function setPassword(password) {
    this.passwordSalt = crypto.randomBytes(passwordSaltLength).toString("base64");
    this.passwordHash = hashPassword(password, this.passwordSalt);
}

function checkPassword(password) {
    return this.passwordHash === hashPassword(password, this.passwordSalt);
}

function hashPassword(password, salt) {
    return crypto.pbkdf2Sync(
        password,
        salt,
        iterations,
        passwordHashLength,
        algorithm
    ).toString(`hex`);
}

module.exports = {
    setPassword,
    checkPassword
}
