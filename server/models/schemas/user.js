const Schema = require("mongoose").Schema;

const user = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            index:true
        },
        email:{
            type:String,
            required: true,
            unique: true,
            index:true
        },
        phoneNumber: {
            type: String
        },
        passwordSalt: {
            type: String,
            required: true
        },
        passwordHash: {
            type: String,
            required: true
        }
    }
);

module.exports = user;
