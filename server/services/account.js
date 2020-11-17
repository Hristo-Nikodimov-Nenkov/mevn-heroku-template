const User = require("./../models/User");

async function registerAsync(model) {
    try {
        if (await User.usernameExists(model.username)) {

            throw `Username ${model.username} is already registered.`;
        }
        if (await User.emailExists(model.email)) {
            throw `E-Mail ${model.email} is already registered.`
        }
        if (model.phoneNumber && await User.phoneNumberExists(model.phoneNumber)) {
            throw `Phone number ${model.phoneNumber} is already registered.`
        }

        const user = new User({
            username: model.username,
            email: model.email,
            phoneNumber: model.phoneNumber || ""
        });

        user.setPassword(model.password);

        const dbUser = await user.save();
        return mapToViewModel(dbUser);
    } catch (err) {
        throw err;
    }
}

async function loginAsync(model) {
    try {
        let user =
            await User.getByUsername(model.username) ||
            await User.getByEmail(model.username);

        if (!user.checkPassword(model.password)) {
            throw "Invalid credentials";
        }

        return mapToViewModel(user);
    } catch (err) {
        throw err;
    }

}

function mapToViewModel(user) {
    return {
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber
    }
}

module.exports = {
    registerAsync,
    loginAsync
}
