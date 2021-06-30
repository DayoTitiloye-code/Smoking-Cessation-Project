const mysql = require('mysql');
var dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'twonineninefive2995',
    database : 'node_mysql_crud_db'
  });
//users object create
var Users = function(users){
  this.first_name     = users.first_name;
  this.last_name      = users.last_name;
  this.email          = users.email;
  this.password          = users.password;
  this.status         = users.status ? users.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
Users.create = function (newEmp, result) {
dbConn.query("INSERT INTO users set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Users.findById = function (id, result) {
dbConn.query("Select * from users where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Users.findAll = function (result) {
dbConn.query("Select * from users", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('users : ', res);
  result(null, res);
}
});
};
Users.update = function(id, users, result){
dbConn.query("UPDATE users SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [users.first_name,users.last_name,users.email,users.phone,users.organization,users.designation,users.salary, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Users.delete = function(id, result){
dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Users;