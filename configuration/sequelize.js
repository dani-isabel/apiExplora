const sequelize = require("sequelize");
const confi = require('./confi.json');
const dataBase = new sequelize (`mysql://${confi.USER}:${confi.PASSWORD}@${confi.HOST}:${confi.PORTDB}/${confi.BDNAME}`);

module.exports = dataBase;