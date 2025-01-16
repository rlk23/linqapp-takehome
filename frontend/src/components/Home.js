// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Home = () => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-end my-3">
                    <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
                </div>
                <div className="col-md-8 mx-auto">
                    <table className="table table-hover">
                        <thead className="bg-dark text-white text-center">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <Link to={`/edit/${contact.id}`} className="btn btn-primary me-2">Edit</Link>
                                        <button onClick={() => deleteContact(contact.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;
