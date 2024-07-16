// Create web server
// 1. Load the http module
var http = require('http');
var fs = require('fs');
// 2. Create a server
http.createServer(function(req, res) {
    // 3. Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/html'});
    // 4. Set the response body
    fs.readFile('comments.html', function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.write(data);
        return res.end();
    });
}).listen(8080);
console.log('Server running at http://');