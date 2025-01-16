// src/components/AddContact.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

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
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <h2>Add Contact</h2>
                        <div className="form-group my-2">
                            <input
                                type="text"
                                placeholder="Name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-2">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="form-control"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-dark">Add Contact</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContact;
