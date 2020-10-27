const bodyParser = require("body-parser");
const extended = true;

module.exports = function (app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended}))
}
