FROM node:latest

# 拷贝文件
COPY ./src /var/www/api

# 设置工作目录
WORKDIR /var/www/api

# 安装依赖
RUN cd /var/www/api; npm install

EXPOSE 80

CMD ["npm", "run", "start"]
