/**
 * Created by Administrator on 2015/9/18.
 */
var http = require("http");
var url = require("url");



function start(route, handle) {
    http.createServer(function (req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");
        //var postData="";
        //req.setEncoding("utf8");
        //req.addListener("data",function(postDataChunk){
        //   postData+= postDataChunk;
        //    console.log("post data:"+postDataChunk)
        //});
        //
        //req.addListener("end",function(){
        //    route(handle, pathname, res,req);
        //});
        //var content =

        route(handle, pathname, res,req);

        //res.writeHead(200, {"Content-Type": "text/html"});
        //res.write("<h1>" + content + "</h1>");
        //res.write("<h1>Node.js</h1>");
        //res.write("<p>Hello World</p>");
        //res.end("<a href='hivier.com' target='_blank'><p>hivier</p></a>");
    }).listen(3000);

    console.log("HTTP server is listening at port 3000.");

}

exports.start = start;