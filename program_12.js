var http = require("http");
var map = require('through2-map');

var server = http.createServer(function(req, resp) {
    if(req.method != 'POST')
        return resp.end('Not a POST request\n');
    
    req.pipe(map(function(data) {
        return data.toString().toUpperCase();
    })).pipe(resp);
});

server.listen(Number(process.argv[2]));