const sequelize = require("sequelize");
const dataBase = new sequelize("mysql://root:localhost:3306/experience");
module.exports = dataBase;