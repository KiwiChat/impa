var http = require("http");
var Unblocker = require("unblocker");

// var unblocker = Unblocker({});
var unblocker = new Unblocker({prefix: '/impa/'});

http
  .createServer(function(req, res) {
    unblocker(req, res, function(err) {
      var headers = { "content-type": "text/html" };
      if (err) {
        res.writeHead(500, headers);
        return res.end(err.stack || err);
      }
      if (req.url == "/") {
        res.writeHead(200, headers);
        return res.end(

        );
      } else {
        res.writeHead(404, headers);
        return res.end("ERROR 404: File Not Found.");
      }
    });
  })
  .listen(8080);

console.log("RCR OK");


process.on('uncaughtException', function (err) {
    console.log(err);
});
