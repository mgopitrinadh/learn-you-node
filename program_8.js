var http = require("http");
var bl = require("bl");

http.get(process.argv[2], function(response) {
    
    response.pipe(bl(function(err, data) {
        if(err)
            return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
//     var buffer = '';
//   response.setEncoding('utf8') ;
//   response.on('error', console.error);
//   response.on('data', function(chunk) {
//       buffer += chunk;
//   });
//   response.on('end', function() {
//       console.log(buffer.length);
//       console.log(buffer);
//   });
// });

