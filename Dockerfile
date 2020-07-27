FROM nginx

LABEL version=1.0.0
LABEL maintainer="Adam Balski"

RUN rm /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html
COPY server.conf /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html/
EXPOSE 80/tcp

CMD ["nginx", "-g", "daemon off;"]
