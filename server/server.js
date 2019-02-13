let express = require('express');
let bodyParser = require('body-parser')// goes with req.body ..DO NOT FORGET
let PORT = 5000;
let app = express();
const pg = require('pg');
app.use(express.static('server/public'));// get any reuqst, static
app.use(bodyParser.urlencoded({ extended: true }));

const pool = pg.Pool({//connects to postgres
    host: 'localhost',//where is the database
    port: 5432,
    database: 'restaurant',// name of database
    max: 10, //number of connections at 1 time
    idleTimeoutMillis: 30000 // 30s to try to connect, othewise cancel query
});// end pg.pool

pool.on('connect', () => {
    console.log('postgres connected');
});// end pool connect

pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
})// end pool error

app.get('/restaurant', (req, res) => {// get info from server
    pool.query('SELECT * FROM "restaurant" ')//relation error is table in teminal

        .then((result) => {
            res.send(result.rows);
            console.log(result.rows);// each object is going to be a row in from music_library
        }).catch((error) => {
            console.log('error with books select GET', error);
            res.sendStatus(500);
        });
});//end app.get

app.post('/restaurant', (req, res) => {// get info from server
    pool.query(`INSERT INTO "restaurant" ("name", "type")
                VALUES($1, $2);`,
        [req.body.name, req.body.type])//relation error is table in teminal, use back ticks
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error with restaurant select POST', error);
            res.sendStatus(500);
        });
});// end app.post


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});//end listen PORT