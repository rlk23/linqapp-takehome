import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Card,
    TextField,
    Typography,
    Stack,
} from '@mui/material';

const AddContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailExists = contacts.some((contact) => contact.email === email);
        const numberExists = contacts.some((contact) => contact.number === number);

        if (!name || !email || !number) {
            return toast.warning('Please fill in all fields!');
        }

        if (emailExists) {
            return toast.error('Email already exists!');
        }

        if (numberExists) {
            return toast.error('Phone number already exists!');
        }

        const newContact = { id: contacts.length + 1, name, email, number };
        dispatch({ type: 'ADD_CONTACT', payload: newContact });
        toast.success('Contact added successfully!');
        navigate('/');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
                padding: 2,
            }}
        >
            <Card
                sx={{
                    width: 400,
                    padding: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h5" component="h3" textAlign="center" gutterBottom>
                    Add New Contact
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id="number"
                            label="Phone Number"
                            type="text"
                            variant="outlined"
                            fullWidth
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            sx={{ textTransform: 'none' }}
                        >
                            Add Contact
                        </Button>
                    </Stack>
                </form>
            </Card>
        </Box>
    );
};

export default AddContact;
