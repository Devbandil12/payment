const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const { z } = require('zod');
require("dotenv").config()
 // Adjust the path if needed

const Authrouter = express.Router();

// Route for user registration
Authrouter.post('/register', async (req, res) => {
  try {
    const { phoneNo, email, password, name } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ phoneNo });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ phoneNo, email, password, name });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});
const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }), // Validates email format
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }), // Password length validation
  });
// Route for user login
Authrouter.post('/login', async (req, res) => {
    try {
        // Validate input using Zod
        const validation = loginSchema.safeParse(req.body);  // safeParse returns a result with either success or failure
    
        if (!validation.success) {
          // If validation fails, return the error messages
          return res.status(400).json({ message: "Validation error", errors: validation.error.errors });
        }
    
        const { email, password } = req.body;
    
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Invalid password' });
        }
    
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.cookie=token
        res.status(200).json({ message: 'Login successful',});
      } catch (error) {
        console.error('Login error:', error);  // Log the error for debugging
        res.status(500).json({ message: 'Error logging in', error: error.message || error });
      }
  });
   

module.exports = Authrouter;
