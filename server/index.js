const app = require("express")();

const {database, middlewares, routes, server} = require("./configs");

database(app);
middlewares(app);
routes(app);
server(app);
