const mongoose = require("mongoose");
const {database} = require("./../configs");

module.exports = function () {
    const connectionString = database.getConnectionString(database.connection);
    console.log(connectionString);

    mongoose.connect(connectionString,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then((db) => {
            console.log(`Connected to ${ database.connection.databaseName}`);
        })
        .catch((err) => {
            console.log(err);
        })
}
