const mysql = require("mysql");
const keys = require("./keys.js");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: keys.password,
    database: "burgers_db"
})

module.exports = connection;