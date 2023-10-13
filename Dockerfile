From nginx

COPY ./build /usr/share/nginx/html/developerpedia

COPY ./conf/nginx-default.conf /etc/nginx/conf.d/default.conf

# 暴露容器的80端口，允许外部访问
EXPOSE 80

# 容器启动时运行的命令
CMD ["nginx", "-g", "daemon off;"]
