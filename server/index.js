const app = require("express")();

const {
    database,
    httpsEnforce,
    staticFiles,
    bodyParser,
    cookieParser,
    routes,
    server
} = require("./middlewares");

database();

httpsEnforce(app);
staticFiles(app);
bodyParser(app);
cookieParser(app);

routes(app);
server(app);
