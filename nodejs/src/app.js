const http = require("http");

//创建一个编译监听程序
http.createServer(function(req, res){
  const statusCode = 200;
  const resText = "NodeJS API IS WORKING!";
	//仅仅是POST请求的特殊路由被处理
  console.log('------------------------NodeJS API IS WORKING!------------------------');
	//响应请求
	res.writeHead(statusCode, {"Content-Type": "text/plain"});
    res.write(resText);
    res.end();
}).listen(8016);

console.log("blog-app start.", new Date());
