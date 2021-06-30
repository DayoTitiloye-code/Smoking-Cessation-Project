const Personaldiary = require('../models/personaldiary.model');
exports.findAll = function(req, res) {
Personaldiary.findAll(function(err, entry) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', entry);
  res.send(entry);
});
};

exports.create = function(req, res) {
const new_entry = new Personaldiary(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Personaldiary.create(new_entry, function(err, entry) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Entry added successfully!",data:entry});
  });
}
};

exports.findById = function(req, res) {
Entry.findById(req.params.id, function(err, entry) {
  if (err)
  res.send(err);
  res.json(entry);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Entry.update(req.params.id, new Entry(req.body), function(err, entry) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Entry successfully updated' });
});
}
};

exports.delete = function(req, res) {
Entry.delete( req.params.id, function(err, entry) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Entry successfully deleted' });
});
};