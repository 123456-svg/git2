//初始服务器
//node 模块
var http=require("http");
//res request 请求 res respomse 相应
var serve= http.createServer(function(req,res){
res.end("hellow world")
//响应=》响应服务器
})
serve.listen(3000,function(){
    console.log("服务器已经挂起")
})
