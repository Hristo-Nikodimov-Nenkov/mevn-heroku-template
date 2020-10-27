const app = require("express")();

const {database, routes, server} = require("./configs");
const {bodyParser} = require("./middlewares");

database();

bodyParser(app);

routes(app);
server(app);
