// src/components/EditContact.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const { id } = useParams(); // Get the contact ID from the route parameters

    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Find the current contact based on the ID
    const currentContact = contacts.find((contact) => contact.id === parseInt(id));

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailExists = contacts.find(
            (contact) => contact.id !== parseInt(id) && contact.email === email
        );
        const numberExists = contacts.find(
            (contact) => contact.id !== parseInt(id) && contact.number === number
        );

        if (!name || !email || !number) {
            return toast.warning('Please fill in all fields!');
        }

        if (emailExists) {
            return toast.error('Email already exists!');
        }

        if (numberExists) {
            return toast.error('Phone number already exists!');
        }

        const updatedContact = {
            id: parseInt(id),
            name,
            email,
            number,
        };

        dispatch({ type: 'UPDATE_CONTACT', payload: updatedContact });
        toast.success('Contact updated successfully!');
        navigate('/');
    };

    return (
        <div className="container">
            {currentContact ? (
                <>
                    <h1 className="display-3 text-center fw-bold">Edit Contact</h1>
                    <div className="row">
                        <div className="col-md-6 shadow mx-auto p-5">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="form-control"
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-dark">
                                        Update Contact
                                    </button>
                                    <Link to="/" className="btn btn-danger ms-3">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <h1 className="text-center fw-bold my-5">Contact Not Found!</h1>
            )}
        </div>
    );
};

export default EditContact;
