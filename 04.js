var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    fs.readFile("node.txt",(err,data)=>{
        console.log(data.toString())
        req.end(data)
    })
}).listen(3000)