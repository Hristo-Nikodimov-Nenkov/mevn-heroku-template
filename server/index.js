const app = require("express")();

const {database, routes, server} = require("./configs");

database();
routes(app);
server(app);
