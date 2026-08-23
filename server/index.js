const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000; // The port your React app is looking for!

// Middleware to allow React to communicate with this backend
app.use(cors());
app.use(express.json());

// A simple mock endpoint for logging in
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    console.log(`Received login attempt for: ${email}`);

    // Mock validation: In a real app, you would check a database here!
    if (email === 'demo@company.com' && password === 'password123') {
        // Success! Send back a fake token
        res.status(200).json({ 
            message: 'Login successful!',
            token: 'fake-jwt-token-12345'
        });
    } else {
        // Failure! Send back an error
        res.status(401).json({ 
            message: 'Invalid email or password.' 
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});