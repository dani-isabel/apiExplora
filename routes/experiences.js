const express = require('express');
const sequelize = require('sequelize');
const middlewares = require('../middlewares/validatExperience');
const roomValidation = require('../middlewares/validateRoom');
const dataBase = require('../configuration/sequelize');
const router = express.Router();

router.get('/',(req,res) => {
    const query = 'SELECT experiences.*, rooms.room_name FROM experiences JOIN rooms ON experiences.room_id = rooms.id';
    dataBase.query(query, {type: sequelize.QueryTypes.SELECT})
        .then((experiences) => {
            res.status(200).json(experiences);
        })
        .catch((e) => console.log(e));
})
router.get('/:id',middlewares.xpExist,(req,res) => {
    const {id} = req.params;
    const query = 'SELECT experiences.*, rooms.room_name FROM experiences JOIN rooms ON experiences.room_id = rooms.id WHERE experiences.id = ?';
    dataBase.query(query,{replacements: [id],type: sequelize.QueryTypes.SELECT})
        .then((experiences) => {
            res.status(200).json(experiences);
        })
        .catch((e) => console.log(e));
})
router.get('/salas/:room_id',(req,res) => {
    const {room_id} = req.params;
    const query = 'SELECT experiences.*, rooms.room_name FROM experiences JOIN rooms ON experiences.room_id = rooms.id WHERE experiences.room_id = ?';
    dataBase.query(query,{replacements: [room_id],type: sequelize.QueryTypes.SELECT})
        .then((experiences) => {
            res.status(200).json(experiences);
        })
        .catch((e) => console.log(e));
})
router.post('/',middlewares.xpRepeat,roomValidation.roomExist,middlewares.blank,(req,res) => {
    const query = 'INSERT INTO experiences (title,description,room_id) VALUES (?,?,?)';
    const {title,description,room_id} = req.body;
    dataBase.query(query, {replacements: [title,description,room_id]})
        .then(() => {
            res.json({status:'Experience created', experiences: req.body});
        })
        .catch((e) => console.error(e));
})
router.put('/:id',middlewares.xpExist,middlewares.xpRepeat,roomValidation.roomExist,(req,res) => {
    const {id} = req.params;
    const {title,description,room_id} = req.body;
    const query = 'UPDATE experiences SET title = ?, description = ?, room_id = ? WHERE id = ?';
    dataBase.query(query, {replacements: [title, description, room_id, id]})
        .then(() => {
            res.json({status:'Experience updated successful'});
        })
        .catch((e) => console.log((e)));
})
router.delete('/:id',middlewares.xpExist,(req,res) => {
    const {id} = req.params;
    const query = 'DELETE FROM experiences WHERE id = ?';
    dataBase.query(query, {replacements: [id]})
        .then(() => {
            res.status(200).json({ status: 'Experience delete' });
        }).catch((e => console.log('Something went wrong...',(e))));
})
module.exports = router;