module.exports = {
    database: require("./database"),
    staticFiles: require("./staticFiles"),
    bodyParser: require("./bodyParser"),
    cookieParser: require("./cookieParser"),
    authenticate :require("./authenticate"),
    routes: require("./routes"),
    server: require("./server")
}
