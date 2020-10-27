const app = require("express")();

const {database, routes, server} = require("./configs");
const {staticFiles, bodyParser} = require("./middlewares");

database();

staticFiles(app);
bodyParser(app);

routes(app);
server(app);
