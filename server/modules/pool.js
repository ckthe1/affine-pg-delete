const pg = require('pg');
const pool = pg.Pool({//connects to postgres, install npm pg
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


module.exports = pool;