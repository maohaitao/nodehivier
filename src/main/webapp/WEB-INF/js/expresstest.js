/**
 * Created by Administrator on 2015/9/18.
 */

var express = require("express");
var app = express();

app.get("/test",function(req, res){

    var http = require('http');
    var options = {
        host: 'www.hivier.com',
        path: '/',
        method: 'GET',
        headers: {
            'Accept': 'text/html',
            "Content-Type": 'application/x-www-form-urlencoded'
        }
    };
    var re = "";
    var req = http.request(options, function(serverFeedback) {
        serverFeedback.setEncoding('utf8');
        var body = "";
        serverFeedback.on('data', function (data) { body += data; })
            .on('end', function () { res.send(body); });

        //re = res1.on('data', function (data) {
        //    console.log(data);
        //});
    });
    console.log(re);
    req.end();
    //res.send("test" +re);
});
app.listen(3000);