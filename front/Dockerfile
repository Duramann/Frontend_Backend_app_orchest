FROM node:13.12.0-alpine
WORKDIR /front
ENV PATH /app/node_modules/.bin:$PATH
COPY front/package.json ./
COPY front/package-lock.json ./
RUN npm i
COPY front/. .
EXPOSE 3000
CMD ["npm", "start"]