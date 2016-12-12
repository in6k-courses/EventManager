FROM node:4.4
RUN npm install -g npm

RUN mkdir /client
WORKDIR /client

COPY src . /

EXPOSE 3000:3001
CMD ["npm", "run", "api"]
