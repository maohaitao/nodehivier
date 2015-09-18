/**
 * Created by Administrator on 2015/9/18.
 */
var http = require("http");

http.createServer(function(req, res) {
    res.writeHead( 200 , {"Content-Type":"text/html"});
    res.write("<h1>Node.js</h1>");
    res.write("<p>Hello World</p>");
    res.end("<a href='hivier.com' target='_blank'><p>hivier</p></a>");
}).listen(3000);
console.log("HTTP server is listening at port 3000.");