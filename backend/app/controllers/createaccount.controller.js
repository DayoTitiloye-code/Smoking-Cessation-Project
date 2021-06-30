const Account = require('../models/createaccount.model');

// Create and Save a new Account
exports.create = (req, res) => {
  // Validate request
 

// // Create an Account
const account = new Account({
    
    FirstName:req.body.FirstName,
    LastName:req.body.LastName,
    Email:req.body.Email,
    Password:req.body.Password
    
});

// Save Account in the database
account.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the Account."
    });
});
// console.log(req.body.Account)

};

exports.findAll = (req, res) => {
    Account.find()
    .then(Accounts => {
        res.send(Accounts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Accounts."
        });
    });
};


