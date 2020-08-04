const sequelize = require("sequelize");
const dataBase = require('../configuration/sequelize');

const xpExist = (req,res,next) => {
    const {id} = req.params;
    const exist = 'SELECT * FROM experiences WHERE id = ?';
    dataBase.query(exist, {replacements: [id], type: sequelize.QueryTypes.SELECT} )
        .then ( data => {
            if(!data.length) {
                return res.status(404).json({error: 'Experience not found'})
            }
            return next();
        }).catch((e) => {
            return res.status(400).json({error: 'Something went wrong', e})
        })
};
const xpRepeat = (req,res,next) => {
    const {title} = req.body;
    const repeat = 'SELECT * FROM experiences WHERE title = ?';
    dataBase.query(repeat, {replacements: [title], type: sequelize.QueryTypes.SELECT})
        .then (data => {
            if(data.length) {
                return res.status(404).json({error: 'This experience already exist'})
            }
            return next();
        }).catch((e) => {
            return res.status(404).json({error: 'Something went wrong...',e})
        })
}
const blank =(req,res,next) => {
    const {title,description,room_id} = req.body;
     if(title.length > 3 || !description.length > 3|| !room_id.length > 0) {
         console.log(title.length);
         return next()
     }
     return res.status(404).json({erros: 'It is missing information'});
}
module.exports = {xpExist,xpRepeat,blank}