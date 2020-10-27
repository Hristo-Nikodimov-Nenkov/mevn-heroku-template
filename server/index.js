const app = require("express")();

const {database, staticFiles, bodyParser, cookieParser, routes, server} = require("./middlewares");

database();

staticFiles(app);
bodyParser(app);
cookieParser(app);

routes(app);
server(app);
