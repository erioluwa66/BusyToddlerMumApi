#Stage1: Build and dependency installation
FROM node:16-alpine as builder
#create app directory
WORKDIR /app

#Install dependencies
#A wildcard is used to ensure both package.json and package-lock.json are copied where available
COPY package*.json ./ 
RUN npm install

#Copy the rest of the application
COPY . .


#Build the application if needed (uncomment the next line if you have a build stage)
#RUN npm run build

#Stage 2: Setup production environment
FROM node:16-alpine
WORKDIR /app

#Copy from builder
COPY --from=builder /app .

#Expose the application port
EXPOSE 5050

#Run the application
CMD [ "node", "server.js" ]