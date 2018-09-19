// Set up MySQL connection.
var mysql = require("mysql");

// Creating dev and production env:
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_UN,
  password: process.env.MYSQL_PW,
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
}
// Export connection for our ORM to use.
module.exports = connection;
