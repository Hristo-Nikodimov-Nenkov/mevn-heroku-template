const app = require("express")();

require("./configs/database")(app);
require("./configs/middlewares")(app);
require("./configs/routes")(app);
require("./configs/server")(app);
