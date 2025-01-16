import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams(); // Get the contact ID from the route parameters
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find the current contact based on the ID
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

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
      return toast.warning("Please fill in all fields!");
    }

    if (emailExists) {
      return toast.error("Email already exists!");
    }

    if (numberExists) {
      return toast.error("Phone number already exists!");
    }

    const updatedContact = {
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: updatedContact });
    toast.success("Contact updated successfully!");
    navigate("/");
  };

  return (
    <Container>
      {currentContact ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Paper elevation={3} sx={{ padding: 4, width: "40rem" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Edit Contact
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <Box
                display="flex"
                justifyContent="space-between"
                marginTop={2}
                alignItems="center"
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Update Contact
                </Button>
                <Button
                  component={Link}
                  to="/"
                  variant="outlined"
                  color="error"
                  fullWidth
                  sx={{ marginLeft: 2 }}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      ) : (
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          sx={{ marginTop: 4 }}
        >
          Contact Not Found!
        </Typography>
      )}
    </Container>
  );
};

export default EditContact;
