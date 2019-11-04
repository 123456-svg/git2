var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    var result = "http://localhost:3000/?username=7we&password=qwe"
    var obj = url.parse(result);
    console.log(obj)
    res.end()
}).listen(3000)