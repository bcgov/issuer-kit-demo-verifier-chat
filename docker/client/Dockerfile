FROM node:10
WORKDIR /app
COPY chat-client/package*.json /app/
RUN npm install
COPY chat-client/ .
RUN npm run config && npm run build