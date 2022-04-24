const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username,
        user: 'ChrisWarren',
        //Your MySql Password
        password: 'Griffin1',
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db;