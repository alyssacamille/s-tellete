import express from 'express';
import { connect } from 'mongoose'; //For MongoDB

import multer from 'multer';
import path from 'path';

import User from './models/User'; // Import User model
import Product from './models/Product'; // Import Product model

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB as a local for now
connect('mongodb://localhost:27017/satelite-app')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Set up multer for file uploads (This is where you can store your images or contents)
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'products/'); // Directory where uploaded images will be stored
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname); // Use the original filename
    }
  });

const upload = multer({ storage: storage });


//We need to set up a backend here to upload image to your products via POST Request and use it
// Handle image upload
//app.POST()
// Serve images from the 'products' directory
//app.use('/products', express.static(path.join(__dirname, 'uploads')))

//Listen to Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

