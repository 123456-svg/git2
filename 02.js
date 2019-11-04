//解决乱码
var http = require("http");
//reqjjjjjjjjjjjjjjjjjjjj request 请求 res respomse 响应
http.createServer(function (req, res) {
    //设置请求响应头 文本类型 text/html
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    res.end("中文")

}).listen(3000, function () {
    console.log("服务器已经挂起")
})