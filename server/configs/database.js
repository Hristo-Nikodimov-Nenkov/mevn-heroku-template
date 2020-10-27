const mongoose = require("mongoose");

dbConnections = {
    development: {
        host: "localhost",
        port: 27017,
        databaseName: "mevn-heroku-template-db"
    },
    production: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        databaseName: process.env.DB_DATABASE_NAME
    }
}

function getConnectionString(db) {
    let connectionString = "mongodb://";

    if (db.username || db.password) {
        connectionString += `${db.username}:${db.params}@`
    }
    connectionString += `${db.host}:${db.port}/${db.databaseName}`

    return connectionString
}

const connection = dbConnections[process.env.NODE_ENV] || dbConnections["development"];

module.exports = function () {
    mongoose.connect(getConnectionString(connection), {useNewUrlParser: true, useUnifiedTopology: true})
        .then((db) => {
            console.log(`Connected to ${connection.databaseName}`);
        })
        .catch((err) => {
            console.log(err);
        })
}
