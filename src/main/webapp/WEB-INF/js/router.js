/**
 * Created by Administrator on 2015/9/18.
 */
function route(handle,pathname,res,req){
    console.log("About to route a request for "+ pathname);
    if(typeof handle[pathname]=='function'){
         handle[pathname](res,req);
    }else{
        console.log("no request handler found for"+ pathname);
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.write("404 Not found");
        res.end();
        //return "404 not found";
    }
}
exports.route = route;
