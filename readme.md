用来练习Docker的一个项目。

## 目录说明

- koa： docker和koa的练习，通过koa提供静态服务和其他端口监听
- nginx： docker和nginx的练习，利用nginx提供静态服务和端口转发
- nodejs： docker和nodejs的练习，nodejs监听了一个8016端口，与上一个nginx结合起来实现静态服务和端口转发及监听
- web： 一个docker同时实现nginx和nodejs服务，不使用docker compose，只利用npm同时启动两个服务
- compo： 利用docker compose同时启动nginx容器和nodejs容器
