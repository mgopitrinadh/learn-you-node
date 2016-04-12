var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, resp) {
    resp.writeHead(200, {'content-type': 'text/plain'});
    var fsStream = fs.createReadStream(process.argv[3]).pipe(resp);
});

server.listen(Number(process.argv[2]));