const mongoose = require('mongoose');
const {Schema} = mongoose;

const usernameRequiredErrorMessage = "Username is required!";
const usernameErrorMessage = "Username must have at least 1 small letter, 1 capital letter, 1 digit and length between 6 and 24 symbols.";

const emailRequiredErrorMessage = "Email address is required!";
const emailErrorMessage = "Please fill a valid email address";

let userSchema = new Schema({
    username: {
        type: String,
        index: true,
        unique: true,
        dropDups: true,
        required: usernameRequiredErrorMessage,
        match: [/^[0-9]{1,22}[a-z]{1,22}[A-Z]{1,22}$/, usernameErrorMessage]
    },
    email: {
        type: String,
        index: true,
        unique: true,
        dropDups: true,
        required: emailRequiredErrorMessage,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, emailErrorMessage]
    },
    phoneNumber: {
        type: String,
        required: false
    },
    passwordSalt: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
