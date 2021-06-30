const mysql = require('mysql');
var dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'twonineninefive2995',
    database : 'personaldiary'
  });

var Entry = function(diary){
  this.entryTitle     = diary.entryTitle;
  this.entry      = diary.entry;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};

Entry.create = function (newEmp, result) {
dbConn.query("INSERT INTO diary set ?", newEmp, function (err, res) {
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

Entry.findById = function (id, result) {
dbConn.query("Select * from diary where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Entry.findAll = function (result) {
dbConn.query("Select * from diary", function (err, res) {
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

Entry.update = function(id, diary, result){
dbConn.query("UPDATE diary SET entryTitle=?,entry=?, WHERE id = ?", [diary.entryTitle,diary.entry, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Entry.delete = function(id, result){
dbConn.query("DELETE FROM diary WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


module.exports= Entry;