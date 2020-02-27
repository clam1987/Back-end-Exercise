const connection = require("mysql");

const db = connection.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "coders_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to the database");
})

module.exports = db;