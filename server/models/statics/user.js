function usernameExists(username) {
    return new Promise((resolve, reject) => {
        this.exists({username: username}, (err, exists) => {
            if (err) {
                reject(err);
            }

            resolve(exists);
        });
    })
}

function getByUsername(username) {
    return new Promise((resolve, reject) => {
        this.findOne({username: username}, (err, user) => {
            if (err) {
                reject(err);
            }

            resolve(user);
        })
    })
}

function emailExists(email) {
    return new Promise((resolve, reject) => {
        this.exists({email: email}, (err, exists) => {
            if (err) {
                reject(err);
            }

            resolve(exists);
        });
    })
}

function getByEmail(email) {
    return new Promise((resolve, reject) => {
        this.findOne({email: email}, (err, user) => {
            if (err) {
                reject(err);
            }

            resolve(user);
        })
    })
}

function phoneNumberExists(phoneNumber) {
    return new Promise((resolve, reject) => {
        if (!phoneNumber) {
            resolve(false);
        }

        this.exists({phoneNumber: phoneNumber}, (err, exists) => {
            if (err) {
                reject(err);
            }

            resolve(exists);
        });
    })
}

function getByPhoneNumber(phoneNumber) {
    return new Promise((resolve, reject) => {
        this.findOne({phoneNumber: phoneNumber}, (err, user) => {
            if (err) {
                reject(err);
            }

            resolve(user);
        })
    })
}

async function userExists(model) {
    const usernameExists = await this.usernameExists(model.username);
    const emailExists = await this.emailExists(model.email);
    const phoneNumberExists = await this.phoneNumberExists(model.phoneNumber);

    return usernameExists || emailExists || phoneNumberExists;
}

module.exports = {
    usernameExists,
    emailExists,
    phoneNumberExists,
    getByUsername,
    getByEmail,
    getByPhoneNumber,
    userExists
}
