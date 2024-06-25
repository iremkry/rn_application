// index.js

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use the CORS middleware

// Routes
app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
