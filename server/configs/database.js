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

const connection = dbConnections[process.env.NODE_ENV] || dbConnections["development"];

function getConnectionString(connection) {
    let connectionString = "mongodb://";

    if (connection.username || connection.password) {
        connectionString += `${connection.username}:${connection.password}@`
    }

    connectionString += `${connection.host}:${connection.port}/${connection.databaseName}`
    return connectionString
}

module.exports = {
    connection,
    getConnectionString
}
