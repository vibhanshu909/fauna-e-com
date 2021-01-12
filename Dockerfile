FROM node
WORKDIR /app
RUN apt-get install git
RUN apt-get install make
RUN git clone https://github.com/fauna/dashboard .
RUN npm install
ENTRYPOINT [ "npm", "start" ]