const express = require('express');
const router = express.Router();//creates a function which are below
const pool = require ('../modules/pool')

router.get('/', (req, res) => {// get info from server
    pool.query('SELECT * FROM "restaurant" ')//relation error is the table 

        .then((result) => {// result is the parameter
            res.send(result.rows);
            console.log(result.rows);// each object is going to be a row in from music_library
        }).catch((error) => {
            console.log('error with restaurant select GET', error);
            res.sendStatus(500);
        });
});//end app.get

router.post('/', (req, res) => {// get 
    pool.query(`INSERT INTO "restaurant" ("name", "type")
                VALUES($1, $2);`,
        [req.body.name, req.body.type])//relation error is table in teminal, use back ticks
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error with restaurant select POST insert Query', error);
            res.sendStatus(500);
        });
});// end app.post

router.delete('/:id', (req, res) => {// : means anything :taco
    console.log('restaurant DELETE HIT');
    console.log('req.params',req.params);

    pool.query(`DELETE FROM "restaurant" WHERE "id"=$1;`,[req.params.id])//relation error is table in teminal, use back ticks
        .then(() => {
            res.sendStatus(204);//for delete 204
        }).catch((error) => {
            console.log('error with restaurant select DELETE Query', error);
            res.sendStatus(500);
        });
});// end app.post
module.exports = router;