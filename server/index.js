const app = require("express")();

const {
    database,
    sslRedirect,
    staticFiles,
    bodyParser,
    cookieParser,
    routes,
    server
} = require("./middlewares");

database();
sslRedirect(app);
staticFiles(app);
bodyParser(app);
cookieParser(app);

routes(app);
server(app);
