// In-memory storage
let contacts = [];

// Get all contacts
exports.getAllContacts = (req, res) => {
    res.json(contacts);
};

// Add a new contact
// Add a new contact
exports.addContact = (req, res) => {
    const { name, email, number } = req.body;

    // Validation: Check if all fields are filled
    if (!name || !email || !number) {
        return res.status(400).json({ error: "All fields are required." });
    }

    // Validation: Check if the phone number contains only digits
    const phoneRegex = /^\d+$/; // Regular expression to allow only digits
    if (!phoneRegex.test(number)) {
        return res.status(400).json({ error: "Phone number must contain only digits." });
    }

    // Check for duplicate email
    const isDuplicate = contacts.some(contact => contact.email === email);
    if (isDuplicate) {
        return res.status(400).json({ error: "Email already exists." });
    }

    // Add new contact
    const newContact = {
        id: contacts.length + 1,
        name,
        email,
        number,
    };
    contacts.push(newContact);
    res.status(201).json(newContact);
};


// Search contacts
exports.searchContacts = (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.json(contacts);
    }

    // Search by name or email
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(query.toLowerCase()) ||
        contact.email.toLowerCase().includes(query.toLowerCase())
    );
    res.json(filteredContacts);
};

// Delete a contact
exports.deleteContact = (req, res) => {
    const { id } = req.params;

    const index = contacts.findIndex(contact => contact.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: "Contact not found." });
    }

    contacts.splice(index, 1);
    res.json({ message: "Contact deleted successfully." });
};
