/**
 * Created by Administrator on 2015/9/18.
 */
var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(res, postdata) {
    console.log("Request handler start was called!");
    //function sleep(milliseconds) {
    //    var starttime = new Date().getTime();
    //    console.log("starttime=" + starttime);
    //    while (new Date().getTime() < starttime + milliseconds);
    //}
    //sleep(10000);
    //return "Hello start";

    //exec("ls -lah",function(error,stdout,stderr){
    //    res.writeHead(200,{"Content-Type":"text/plain"});
    //    res.write(stdout);
    //    res.end();
    //});

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>' +
        '</html>';

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
}

function upload(response, request) {
    //console.log("Request handler upload was called");
    //return "Hello upload";
    console.log("Request handler 'upload' was called.");
    var form =new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request,function(error, fields, files){
        console.log("parsing done");
        fs.renameSync(files.upload.path,"C:/Users/ADMINI~1/AppData/Local/Temp/test.png");
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}


function show(response, req) {
    console.log("Request handler 'show' was called.");
    fs.readFile("C:/Users/ADMINI~1/AppData/Local/Temp/test.png", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;