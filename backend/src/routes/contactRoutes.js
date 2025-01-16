const express = require('express');
const {
    getAllContacts,
    addContact,
    searchContacts,
    deleteContact,
} = require('../controllers/contactController');

const router = express.Router();

// Routes
router.get('/', getAllContacts); // View all contacts
router.post('/', addContact); // Add a contact
router.get('/search', searchContacts); // Search for contacts
router.delete('/:id', deleteContact); // Delete a contact

module.exports = router;
