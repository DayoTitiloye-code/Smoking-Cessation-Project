const express = require('express')
const router = express.Router()
const account_mysqlController =   require('../controllers/account_mysql.controller');
// Retrieve all employees
router.get('/', account_mysqlController.findAll);
// Create a new employee
router.post('/', account_mysqlController.create);
// Retrieve a single employee with id
router.get('/:id', account_mysqlController.findById);
// Update a employee with id
router.put('/:id', account_mysqlController.update);
// Delete a employee with id
router.delete('/:id', account_mysqlController.delete);
module.exports = router