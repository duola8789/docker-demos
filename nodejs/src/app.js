var process = require('child_process');
var http = require("http");

//编译发布过程
var publishLock = false;
function doPublish() {
	if(publishLock){
		publishLock = 1;
		return;
	}
	publishLock = true;
	process.exec('npm run generate', function(error, stdout, stderr) {
		//有其他请求需要处理，则延后一点再次执行
		if(publishLock === 1){
			setTimeout(doPublish, 1000);
		}
		//发布
		publishLock = false;
		if (error !== null) {
			//发布失败
			console.log('exec error: ' + error);
		}else{
			//发布成功
		}
	});
}

//创建一个编译监听程序
http.createServer(function(req, res){
	var statusCode = 404;
	var resText = "Error Request!";
	//仅仅是POST请求的特殊路由被处理
  console.log('-----------------------------------123123---------------------');
	if(/*req.method === "GET" &&*/ req.url === "/bebmbp8"){
		statusCode = 200;
		resText = "Blog Publish...";
		doPublish();
	}
	//响应请求
	res.writeHead(statusCode, {"Content-Type": "text/plain"});
    res.write(resText);
    res.end();
}).listen(8016);

//服务器重启之后，开始一次编译
setTimeout(doPublish, 1000);

console.log("blog-app start.", new Date());
