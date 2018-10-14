var http = require("http");


//创建一个编译监听程序
http.createServer(function(req, res){
	var statusCode = 404;
	var resText = "Error Request!";
	//仅仅是POST请求的特殊路由被处理
  console.log('-----------------------------------123123---------------------');
	//响应请求
	res.writeHead(statusCode, {"Content-Type": "text/plain"});
    res.write(resText);
    res.end();
}).listen(5002);

console.log("blog-app start.", new Date());
