const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Anusha@123",
    database: "connecthub_db"
});

db.connect((err) => {
    if (err) {
        console.log("❌ Database Connection Failed");
        console.log(err.message);
        return;
    }

    console.log("✅ MySQL Connected Successfully");
});

module.exports = db;