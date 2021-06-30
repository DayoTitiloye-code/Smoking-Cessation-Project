const express = require('express')
const router = express.Router()
const personaldiaryController =   require('../controllers/personaldiary.controller');
// Retrieve all employees
router.get('/', personaldiaryController.findAll);
// Create a new employee
router.post('/', personaldiaryController.create);
// Retrieve a single employee with id
router.get('/:id', personaldiaryController.findById);
// Update a employee with id
router.put('/:id', personaldiaryController.update);
// Delete a employee with id
router.delete('/:id', personaldiaryController.delete);
module.exports = router