FROM node:16
WORKDIR /back
COPY back/package.json ./
COPY back/package-lock.json ./
RUN npm install 
COPY back/. .
EXPOSE 5000
CMD ["npm", "start", "back"]
