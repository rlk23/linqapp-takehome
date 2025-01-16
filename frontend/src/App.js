import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

const App = () => {
    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddContact />} />
                <Route path="/edit/:id" element={<EditContact />} />
            </Routes>
        </>
    );
};

export default App;
