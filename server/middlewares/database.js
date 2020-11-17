const mongoose = require("mongoose");
const {database} = require("./../configs");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

module.exports = function () {
    const connectionString = database.getConnectionString(database.connection);

    mongoose.connect(connectionString, options)
        .then(() => {
            console.log(`Connected to ${database.connection.databaseName}`);

            require("./../models/User");
        })
        .catch((err) => {
            console.log(err);
        })
}
