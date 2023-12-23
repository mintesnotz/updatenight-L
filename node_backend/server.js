const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const User = require('./user');
const path = require('path');

// Use Helmet middleware to set various HTTP headers, including CSP
app.use(helmet());

// Configure CSP to allow resources from 'self'
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', 'default-src \'self\'; img-src \'self\' data:; style-src \'self\'; font-src \'self\'; script-src \'self\'; connect-src \'self\'; frame-src \'self\'; object-src \'self\'; base-uri \'self\'; form-action \'self\'; manifest-src \'self\'; frame-ancestors \'self\'; worker-src \'self\'; child-src \'self\'; frame-src \'self\'; block-all-mixed-content; upgrade-insecure-requests;');
  next();
});

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

// Routes
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello, this is the root route!');
});

app.post('/register', async (req, res) => {
  // ... (rest of your code)
});

app.post('/login', async (req, res) => {
  // ... (rest of your code)
});
