const mongoose = require("mongoose");
const userSchema = require("./schemas/user");

const {
    setSalt,
    setPassword,
    checkPassword
} = require("./methods/user");

userSchema.methods.setSalt = setSalt;
userSchema.methods.setPassword = setPassword;
userSchema.methods.checkPassword = checkPassword;

const {
    usernameExists,
    getByUsername,
    emailExists,
    getByEmail,
    phoneNumberExists,
    getByPhoneNumber,
    userExists
} = require("./statics/user");

userSchema.statics.usernameExists = usernameExists;
userSchema.statics.getByUsername = getByUsername;
userSchema.statics.emailExists = emailExists;
userSchema.statics.getByEmail = getByEmail;
userSchema.statics.phoneNumberExists = phoneNumberExists;
userSchema.statics.getByPhoneNumber = getByPhoneNumber;
userSchema.statics.userExists = userExists;

module.exports = mongoose.model("User", userSchema);
