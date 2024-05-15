import express from 'express'; //read and write ka te
import { connect } from 'mongoose'; // For MongoDB
import bcrypt from 'bcrypt'; // For password hashing
import cors from 'cors';
import User from '../models/User.js'; // Import User model
import Product from '../models/Products.js'; // Import Product model

const app = express();
const PORT = process.env.PORT || 5173;

// Determine the allowed origins based on the environment
const allowedOrigins = [
  'http://localhost:5173', // Local development
  'https://s-tellete.vercel.app' // Your Vercel deployment domain
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Use CORS middleware with dynamic origin handling
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connect('mongodb+srv://saki:admin12345@cluster0.w8lu7la.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Handle preflight requests
app.options('*', cors(corsOptions));

// Handle POST requests for both signup and login at the root URL
app.post('/', async (req, res) => {
  const { username, email, dateOfBirth, password, loginUsernameOrEmail, loginPassword } = req.body;

  // Set CORS headers
  res.header('Access-Control-Allow-Origin', '*'); // For demonstration, set this to the correct origins
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // Signup logic
  if (username && email && dateOfBirth && password) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        email,
        dateOfBirth,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json({ message: "Registration Successful. You are successfully registered!", user: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: "Internal server error. Unable to register user." });
    }
  } 
  // Login logic
  else if (loginUsernameOrEmail && loginPassword) {
    try {
      const user = await User.findOne({ $or: [{ username: loginUsernameOrEmail }, { email: loginUsernameOrEmail }] });
      if (!user) {
        return res.status(404).json({ error: "User not found. Please check your username or email." });
      }
      const isPasswordMatch = await bcrypt.compare(loginPassword, user.password);
      if (isPasswordMatch) {
        res.status(200).json({ message: "Login Successful. You are successfully logged in!", user });
      } else {
        res.status(401).json({ error: "Invalid credentials. Please check your password." });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: "Internal server error. Unable to log in." });
    }
  } else {
    // Invalid request
    res.status(400).json({ error: "Invalid request. Please provide the required data for login or registration." });
  }
});


// Listen to Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
