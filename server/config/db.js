const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "u666203437_aurals_tech",
  password: "?WeAreAurals1@2%3#",
  database: "u666203437_Aurals",
});

// host: process.env.MYSQL_HOST,
// user: process.env.MYSQL_USER,
// password: process.env.MYSQL_PWD,
// database: process.env.MYSQL_DB,

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the MySQL Database");
    return;
  }
  console.log("Connection established sucessfully");
});
connection.end((error) => {});

module.exports = connection;
