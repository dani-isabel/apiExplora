const express = require("express");
const sequelize = require("sequelize");
const dataBase = require("../configuration/sequelize");
const router = express.Router();

router.get('/',(req,res) => {
    const query = 'SELECT * FROM experiences';
    dataBase.query(query, {type: sequelize.QueryTypes.SELECT})
        .then((experiences) => {
            res.status(200).json(experiences);
        })
        .catch((e) => console.log(e));
})
router.post('/',(req,res) => {
    const query = 'INSERT INTO experiences (title,description,room_id) VALUES (?,?,?)';
    const {title,description,room_id} = req.body;
    dataBase.query(query, {replacements: [title,description,room_id]})
        .then((response) => {
            res.json({status:'Experience created', experiences: req.body});
        })
        .catch((e) => console.error(e));
})
router.put('/:id',(req,res) => {
    const {id} = req.params;
    const {title,description,room_id} = req.body;
    const query = 'UPDATE experiences SET title = ?, description = ?, room_id = ? WHERE id = ?';
    dataBase.query(query, {replacements: [title, description, room_id, id]})
        .then((response) => {
            res.json({status:'Experience updated successful'});
        })
        .catch((e) => console.log((e)));
})
module.exports = router;
// SELECT experiences.*, rooms.room_name FROM experiences JOIN rooms ON experiences.room_id = rooms.id