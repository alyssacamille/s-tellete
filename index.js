import express from 'express';
import { connect } from 'mongoose'; //For MongoDB
import User from './models/User.js'; // Import User model
import Product from './models/Products.js'; // Import Product model
import multer from 'multer';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5173;

const signup = express.Router();
const login = express.Router();

app.use(cors());
app.use(express.json());

// Mount the router for /signup and /login routes


// Connect to MongoDB
connect('mongodb://localhost:27017/satelite-app')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Authentication
// Signup route
signup.post('/Register', async (req, res) => {
  try {
    const { username, email, password, dateOfBirth } = req.body;
    console.log('Received signup request:', { username, email, password, dateOfBirth });
    const user = new User({ username, email, password, dateOfBirth });
    await user.save();
    console.log('User created successfully:', user);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
login.post('/Login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Received login request:', { email, password });
    const user = await User.findOne({ email, password });
    if (user) {
      console.log('Login successful for user:', user);
      res.status(200).json({ message: 'Login successful' });
    } else {
      console.log('Invalid credentials');
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use(signup);
app.use(login);

// Listen to Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});