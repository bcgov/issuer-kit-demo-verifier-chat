# Stage: build
FROM node:10 as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
ARG RUNMODE
ARG DOCKERHOST
ARG CHAT_SERVER
ARG STS_SERVER
ARG STS_SERVER
ARG REALM
ARG CLIENT_ID
ARG KC_IDP_HINT
ARG PRES_REQ_CONF_ID
ENV RUNMODE=${RUNMODE} \
    DOCKERHOST=${DOCKERHOST} \ 
    CHAT_SERVER=${CHAT_SERVER} \
    STS_SERVER=${STS_SERVER} \
    REALM=${REALM} \
    CLIENT_ID=${CLIENT_ID} \
    KC_IDP_HINT=${KC_IDP_HINT} \
    PRES_REQ_CONF_ID=${PRES_REQ_CONF_ID}
RUN npm run config && npm run build

# Stage: runtime
FROM nginx:alpine as runtime
RUN rm -rf /usr/share/nginx/html/*
COPY /config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/chat-client/ /usr/share/nginx/html/
ENTRYPOINT ["nginx", "-g", "daemon off;"]