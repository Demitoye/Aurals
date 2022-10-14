const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "u666203437_aurals_tech",
  password: "?WeAreAurals1@2%3#",
  database: "u666203437_Aurals",
});

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the MySQL Database");
    return;
  }
  console.log("Connection established sucessfully");
});
connection.end((error) => {});

module.exports = connection;