var path     = require('path'),
    express  = require('express'),
    app      = express()

// these need to go first:
app.use("/scripts", express.static(__dirname + "/app/scripts"));
app.use("/images", express.static(__dirname + "/app/images"));
app.use("/styles", express.static(__dirname + "/app/styles"));
app.use("/templates", express.static(__dirname + "/app/templates"));
app.use("/favicon.ico", express.static(__dirname + "/app/favicon.ico"));

// any other routes:
app.all("/*", function(req, res, next) {
    res.sendFile("index.html", { root: __dirname + "/app" });
});


var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Trello Documentation listening at http://%s:%s', host, port);
});