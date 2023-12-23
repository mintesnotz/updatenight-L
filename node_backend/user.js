// ./user.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Add methods for password hashing

const User = mongoose.model('User', userSchema);

module.exports = User;
