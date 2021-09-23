FROM node:14.15.1
WORKDIR usr/src/app
COPY package*.json ./
COPY project.yaml ./
RUN npm install
COPY . .
CMD ["npm","run","start"]
