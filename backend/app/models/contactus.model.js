const mysql = require('mysql');
var dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'twonineninefive2995',
    database : 'contactus'
  });

var Contact = function(contact){
  this.email     = contact.email;
  this.reason      = contact.reason;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};

Contact.create = function (newEmp, result) {
dbConn.query("INSERT INTO contactus set ?", newEmp, function (err, res) {
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

Contact.findById = function (id, result) {
dbConn.query("Select * from contactus where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Contact.findAll = function (result) {
dbConn.query("Select * from contactus", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('entry : ', res);
  result(null, res);
}
});
};
Contact.update = function(id, contact, result){
dbConn.query("UPDATE contactus SET email=?,reason=?, WHERE id = ?", [contact.email,contact.reason, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Contact.delete = function(id, result){
dbConn.query("DELETE FROM contactus WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Contact;