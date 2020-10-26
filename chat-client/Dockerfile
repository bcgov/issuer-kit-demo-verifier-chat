# Stage: build
FROM node:10 as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
ARG RUNMODE
ARG DOCKERHOST
ARG DSC_SERVER_HOST=${DSC_SERVER_HOST:-"localhost"}
ENV RUNMODE=${RUNMODE} DOCKERHOST=${DOCKERHOST} DSC_SERVER_HOST=${DSC_SERVER_HOST}
RUN npm run config && npm run build

# Stage: runtime
FROM nginx:alpine as runtime
RUN rm -rf /usr/share/nginx/html/*
COPY /config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/chat-client/ /usr/share/nginx/html/
ENTRYPOINT ["nginx", "-g", "daemon off;"]