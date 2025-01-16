const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./src/routes/contactRoutes');

const app = express();
const PORT = 5002;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/contacts', contactRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
