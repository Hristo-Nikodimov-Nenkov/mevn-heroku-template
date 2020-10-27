const devPort = 8000;
const port = process.env.PORT || devPort;

module.exports = function (app){
    app.listen(port, () => console.log(`Server started at port: ${port}`));
}
