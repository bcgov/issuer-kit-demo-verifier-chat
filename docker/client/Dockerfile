FROM node:erbium
WORKDIR /app
COPY chat-client/package*.json /app/
RUN npm install
COPY chat-client/ .
RUN npm run build