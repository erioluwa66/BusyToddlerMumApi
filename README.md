# BusyToddlerMum  API

This is the backend API of [BusyToddlerMum](https://github.com/erioluwa66/BusyToddlerMumApi).

## Backend Tech Stack

- Express.js
- Node.js
- Knex
- Mysql

## Setup

1. Get an OpenAi API Key

   Sign up for an account and follow the instructions to obtain an API Key for the OpenAi API at https://platform.openai.com/

<br>

2. Install nodeJS dependencies
   `    npm i
   `
   <br>

3. Create a .env file with variables from the sample file .env.sample

<br>

4. Download and install an instance of the MySQL database for your operating system at the following url. Ensure to save the db account username and password to use for later.

   https://dev.mysql.com/downloads/mysql/

<br>

5.  Create and select the BusyToddlerMum database in a separate mysql terminal. Enter your password when prompted.
    ```

        CREATE DATABASE busyToddlerMum;

        ```

6.  Create database tables with knex migrations
    `    npm run migrate
   `
    <br>

7.  Seed the tables with recipe and ingredients
    `    npm run seed
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
