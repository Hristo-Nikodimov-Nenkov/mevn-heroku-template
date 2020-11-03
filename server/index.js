const app = require("express")();

const {
    database,
    staticFiles,
    bodyParser,
    cookieParser,
    authenticate,
    routes,
    server
} = require("./middlewares");

//database();

staticFiles(app);
bodyParser(app);
cookieParser(app);
authenticate(app);

routes(app);
server(app);
