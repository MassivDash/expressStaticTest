const restify = require("restify");

var server = restify.createServer();
server.get(
  "*",
  restify.plugins.serveStaticFiles(
    "./static",
  ),
);

server.listen(3000);