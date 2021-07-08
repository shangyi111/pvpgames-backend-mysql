const express = require('express');
const router = express.Router();
const mysql=require('mysql2');
//mysql://b91bdb2e20768c:d3dc0491@us-cdbr-east-04.cleardb.com/heroku_362893d7c4bf568?reconnect=true
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Tr@vel2017",
//     database: "simpleangular",
//     multipleStatements: true
// })
const con = mysql.createPool({
    host: "us-cdbr-east-04.cleardb.com",
    user: "b91bdb2e20768c",
    password: "d3dc0491",
    database: "heroku_362893d7c4bf568",
    multipleStatements: true
})
	
console.debug(console.log("connecting to mysql"))




module.exports.con = con;
module.exports.router = router;
