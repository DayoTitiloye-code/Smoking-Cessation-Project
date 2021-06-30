module.exports = (app) => {
    const accounts = require('../controllers/createaccount.controller');
    

    // Create a new Account
    app.post('/accounts', accounts.create);

    // Retrieve all accounts
    app.get('/accounts', accounts.findAll);

   
}
