var mysql = require("mysql2");
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: "dlsrmfh1!",
    database: "jdbctest",
});

conn.connect();

const express = require('express');
const app = express();

conn.query("select * from book", function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
});

