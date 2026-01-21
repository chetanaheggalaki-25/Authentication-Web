const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for users (in a real app, use a database)
const users = [];

// Password validation function
const validatePassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  return hasUpperCase && hasSpecialChar;
};

// Signup endpoint
app.post('/api/auth/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({ 
      message: 'Password must contain at least one uppercase letter and one special character' 
    });
  }

  // Check if user already exists
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  // Create new user
  const newUser = {
    id: uuidv4(),
    firstName,
    lastName,
    email,
    password // In a real app, hash this password
  };

  users.push(newUser);
  res.status(201).json({ message: 'Signup successful', userId: newUser.id });
});

// Login endpoint
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Find user
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  res.status(200).json({ 
    message: 'Login successful', 
    userId: user.id,
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
