var http = require("http");
var url = require("url")
http.createServer((req, res) => {
    var obj = {
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'localhost:3000',
        port: '3000',
        hostname: 'localhost',
        hash: null,
        search: '?username=7we&password=qwe',
        query: 'username=7we&password=qwe',
        pathname: '/',
        path: '/?username=7we&password=qwe',
        href: 'http://localhost:3000/?username=7we&password=qwe'
    }
    var ret=url.format(obj)
    console.log(ret);
    res.end()
}).listen(3000)