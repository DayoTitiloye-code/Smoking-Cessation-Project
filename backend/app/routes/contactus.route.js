const express = require('express')
const router = express.Router()
const contactusController =   require('../controllers/contactus.controller');
// Retrieve all contacts
router.get('/', contactusController.findAll);
// Create a new contact
router.post('/', contactusController.create);
// Retrieve a contact with id
router.get('/:id', contactusController.findById);
// Update a contact with id
router.put('/:id', contactusController.update);
// Delete a contact with id
router.delete('/:id', contactusController.delete);
module.exports = router