var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    //url.parse().query
    var obj = url.parse(req.url, true).query;
    res.end("接受的uesrname是" + obj.username)
}).listen(3000)