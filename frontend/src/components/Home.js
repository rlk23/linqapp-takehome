import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
    Avatar,
    Button,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
} from '@mui/material';

const Home = () => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    };

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Contacts
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/add"
                    style={{ textTransform: 'none' }}
                >
                    + Add Contact
                </Button>
            </div>
            <TableContainer component={Paper}>
                {contacts.length ? (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contacts.map((contact) => (
                                <TableRow key={contact.id}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar sx={{ bgcolor: 'primary.main', marginRight: '10px' }}>
                                                {contact.name.charAt(0).toUpperCase()}
                                            </Avatar>
                                            <div>
                                                <Typography variant="body1">{contact.name}</Typography>
                                                <Typography variant="caption" color="textSecondary">
                                                    {contact.email}
                                                </Typography>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{contact.email}</TableCell>
                                    <TableCell>{contact.number}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            style={{ marginRight: '10px' }}
                                            component={Link}
                                            to={`/edit/${contact.id}`}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            size="small"
                                            onClick={() => deleteContact(contact.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <Typography variant="body1" align="center" color="textSecondary" style={{ padding: '20px' }}>
                        No contacts available. Add some to get started!
                    </Typography>
                )}
            </TableContainer>
        </div>
    );
};

export default Home;
