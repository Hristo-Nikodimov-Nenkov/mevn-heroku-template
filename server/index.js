const app = require("express")();

const {database, middlewares, routes, server} = require("./configs");

database();
middlewares(app);
routes(app);
server(app);
