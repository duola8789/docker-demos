FROM nginx:latest

# 拷贝文件
COPY . /var/www/html

# 设置工作目录
WORKDIR /var/www/html

# 把nginx.conf配置文件复制到镜像中
ADD nginx.conf /etc/nginx/nginx.conf
ADD global.conf /etc/nginx/conf.d/

# 删除默认配置文件
RUN cd /etc/nginx/conf.d/; rm default.conf

EXPOSE 80

CMD ["nginx"]
