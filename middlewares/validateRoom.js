const sequelize = require('sequelize');
const dataBase = require('../configuration/sequelize');

const roomExist = (req,res,next) => {
    const {room_id} = req.body;
        if(room_id > 0 && room_id <= 5) {
            return next();
        }
        return res.status(404).json({error: 'This status is not valid'})
};
module.exports = {roomExist}