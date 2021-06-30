const mysql = require('mysql');


const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'twonineninefive2995',
  database : 'node_mysql_crud_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
module.exports = {
    url: 'mongodb://localhost:27017/user_db'
}