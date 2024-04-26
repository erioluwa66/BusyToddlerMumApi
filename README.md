# BusyToddlerMum  API

This is the backend API of [BusyToddlerMum](https://github.com/erioluwa66/BusyToddlerMums).

## Backend Tech Stack

- Express.js
- Node.js
- Knex
- Mysql

## Features

- Provides API endpoints for managing recipes and meal plans.
- Handles user authentication and data storage with MySQL.

## Setup

1. Get an OpenAi API Key

   Sign up for an account and follow the instructions to obtain an API Key for the OpenAi API at https://platform.openai.com/

<br>

2. Install nodeJS dependencies
   `    npm install
   `
   <br>

3. Create a .env file with variables from the sample file .env.sample

<br>

4. Download and install an instance of the MySQL database for your operating system at the following url. Ensure to save the db account username and password to use for later.

   https://dev.mysql.com/downloads/mysql/

<br>

5.  Create and select the BusyToddlerMum database in a separate mysql terminal. Enter your password when prompted.

 `   CREATE DATABASE busyToddlerMum;
   `
   <br>

6.  Create database tables with knex migrations
    `    npm run db:migrate
   `
    <br>

7.  Seed the tables with recipe and ingredients
    `    npm run db:seed
   `
    <br>

8.  Run Express App in development mode

    ```
    npm run dev
    ```

    Or to Start Express App

    ```
    npm start
    ```
## Docker Container Setup

### Building and Running with Docker

1. Using Docker Compose:
    Ensure Docker Desktop is running before executing these commands:
    `   docker-compose up --build
   `
    <br>
2. If needed, apply migrations and seed the database
     ```
    docker-compose run app npm run db:migrate
    ``` 
    ```
    docker-compose run app npm run db:seed
     ```
Replace 'app' with the actual service name defined in your docker-compose.yml.

3. ensure to change the file path in the docker compose file to the correct relative path for front-end
 `   context: ../busytoddlermumclient
   `
    <br>
4. Remember to stop and remove containers before rerunning them if needed:
     `   docker-compose down
   `
    <br>

## Deployment
- Automated CI/CD is set up using GitHub Actions to build, test, and push the Docker image to AWS ECR.
- The Docker image can be deployed on AWS ECS or any other container orchestration service that supports Docker.

## Continuous Integration and Deployment
- The GitHub Actions workflow includes steps to check code integrity, build the Docker image, and push it to AWS ECR. The image is then ready to be deployed in a production environment.

## Security
- Implements basic security best practices including environment variable management, secure headers, and API rate limiting.

## Future Enhancements
- Implement more comprehensive user authentication.
- Expand the API to support more complex data interactions.
- Improve scalability by optimizing Docker configurations and implementing more robust cloud deployment patterns.
