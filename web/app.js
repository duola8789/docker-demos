const http = require("http");


//创建一个编译监听程序
http.createServer(function(req, res){
  const statusCode = 404;
  const resText = "This is 8016 from api";
	//响应请求
	res.writeHead(statusCode, {"Content-Type": "text/plain"});
    res.write(resText);
    res.end();
}).listen(8016);

console.log("blog-app start.", new Date());
