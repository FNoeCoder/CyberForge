// ARchivo donde están los datos de la base de datos

const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "cyberforge2",
    password: ""
})

module.exports = pool.promise()