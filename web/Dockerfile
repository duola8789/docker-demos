FROM node:latest

# 如果上个步骤已经更新软件源，这步可以忽略
RUN apt-get update

# 安装 NodeJS 和 npm
RUN apt-get -y -q install nginx

# 拷贝文件
COPY . /var/www/html

# 设置工作目录
WORKDIR /var/www/html

# 把nginx.conf配置文件复制到镜像中
ADD nginx.conf /etc/nginx/nginx.conf
ADD global.conf /etc/nginx/conf.d/

EXPOSE 5000

# 安装依赖
RUN npm install pm2 -g
#RUN npm install

CMD ["npm", "run", "hello"]
