# REST API Parque Explora

**A REST API to manage the CRUD of interactive experiences usign Node JS, Mysql and Javascript**

## Tecnologies and packages used for development

- Node JS
- Express
- MySQL
- Multer (enable update images to the server)
- cors (enable requests from other domains)
- Sequelize
- Nodemon (automatic initialization)

# Getting Started

This README.md will guide you on how to install and use this API.

## Installation and initialization

### Clone the repository or download the zip:

```bash
$ git clone https://github.com/dani-isabel/apiExplora.git
```
## To install the dependencies

Use **npm** or **yarn** to install the dependencies.

```bash
$ npm install
```

```bash
$ yarn install
```

## Dependencies used

```json
"dependencies": {
    "cors": "^2.8.5",
    "ejs": "^3.1.3",
    "express": "^4.17.1",
    "multer": "^1.4.2",
    "mysql2": "^2.1.0",
    "nodemon": "^2.0.4",
    "sequelize": "^6.3.3"
  }
```
## Configure the database

### Create database

Open a new query in mysql and execute:

```bash
CREATE DATABASE IF NOT EXISTS experience
```

Open file [sequelize.js](https://github.com/dani-isabel/apiExplora/blob/master/configuration/sequelize.js). In this file you will find the constant dataBase. Edit this root (`mysql://${confi.USER}:${confi.PASSWORD}@${confi.HOST}:${confi.PORTDB}/${confi.BDNAME}`) in the file [confi.json] (https://github.com/dani-isabel/apiExplora/blob/master/configuration/confi.json) acording with your information:
    - USER: User for conection (root is default when you're using XAMPP)
    - PASSWORD: Assign password (without password is default when you're using XAMPP)
    - HOST: Domain or IP where is running MySQL
    - PORTDB: Port where is listening MySQL
    - BDNAME: Name of the database (for this repository is experience)

Tables and associations will generate automatically after initializing server.

## Initialize the server

```bash
cd server
npm start
```

This will install the app in port **4000**. You can edit the port in the file [confi.json] (https://github.com/dani-isabel/apiExplora/blob/master/configuration/confi.json) in the PORT atribute.

If everything is ok you will get the next message:

- _"Listening in the port 4000"_

Execute the next script [experienceExplora.sql](https://github.com/dani-isabel/apiExplora/blob/master/experienceExplora.sql) in MySQL to insert data in experiences and rooms tables.

You can check this in the mysql tables.

**Important note:** This information needs to be inserted before testing all endpoints. **This is a master data.**
This script can be only executes one time. 

## Testing the API

Use **Postman** or similar apps to try out the CRUD (create, read, update and delete) requests.

**You can [Run in Postman](https://www.getpostman.com/collections/e8a53b0380cd4d431d36). (For adding the collection in your windows postman. This contains all endpoints and data body to test/run each endpoint). This will save you work for testing.**

## METHODS

**Important note:** Please remember to use JSON for all "body: raw" requests.

## ENDPOINTS

(If you changed the PORT variable in sequelize.js please change it in all endpoints).

## For managing users

### POST - Register a experience

http://localhost:4000/

Request body:

```js
    {
        "title": "experienceTitle",
        "description": "experiencedescription",
        "room_id": 1
}
```
(**room_id**) is a JOIN with table rooms.

**Important note:** You can add an image to the server opening localhost:4000 in your browser.

### GET - All experiences

localhost:4000/

Return all the experiences

### GET - Experiences by id

localhost:4000/:id

You need specify a valid and existing id

### GET - Experiences by id room

localhost:4000/:id

You need specify a valid and existing id of a room

**Important note:** Please remember that there are five rooms acording with the existing rooms in Park Explora.

### PUT - Experiences

localhost:4000/:id

- _You need to send a valid room id_.
- _You can't an existing title_.

### DELETE - Experiences

localhost:4000/:id

## Future improvements

- Do the front end for the API
- Add the images to the data base
- Add the documentation in Swagger
- Make the connection with UI swagger using swagger-jsdoc and swagger-ui-express



