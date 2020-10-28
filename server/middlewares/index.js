module.exports = {
    database: require("./database"),
    httpsEnforce: require("./httpsRedirect"),
    staticFiles: require("./staticFiles"),
    bodyParser: require("./bodyParser"),
    cookieParser: require("./cookieParser"),
    routes: require("./routes"),
    server: require("./server")
}
