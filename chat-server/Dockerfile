FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ARG RUNMODE
ARG DOCKERHOST
ENV RUNMODE=${RUNMODE} DOCKERHOST=${DOCKERHOST}
EXPOSE 3030
CMD ["npm", "run", "start"]