// src/__tests__/contactRoutes.test.js
const request = require('supertest');
const express = require('express');
const contactRoutes = require('../routes/contactRoutes');

const app = express();
app.use(express.json());
app.use('/api/contacts', contactRoutes);

describe('Contact API Endpoints', () => {
    let contacts = [];

    test('GET /api/contacts should return an empty array initially', async () => {
        const res = await request(app).get('/api/contacts');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });

    test('POST /api/contacts should add a new contact', async () => {
        const newContact = { name: 'John Doe', email: 'john@example.com', number: '1234567890' };
        const res = await request(app).post('/api/contacts').send(newContact);
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe(newContact.name);
        contacts.push(res.body); // Save contact for further tests
    });

    test('GET /api/contacts should return the added contact', async () => {
        const res = await request(app).get('/api/contacts');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
        expect(res.body[0].name).toBe('John Doe');
    });

    test('DELETE /api/contacts/:id should delete a contact', async () => {
        const idToDelete = contacts[0].id;
        const res = await request(app).delete(`/api/contacts/${idToDelete}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Contact deleted successfully.');
    });
});
