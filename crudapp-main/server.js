// Require modules
const express = require('express');
const connectDB = require('./config/db');
const UserRoutes = require('./routes/UserRoutes');
// const morgan = require('morgan');
require('dotenv').config();

// Database connection
connectDB();

// Express Initialization
const app = express();
app.use(express.json());
// app.use(morgan('dev'));

// Main Routes
app.use('/api/v1/users', UserRoutes);

// PORT
const port = process.env.PORT || 7000;

// Listen to requests
app.listen(port, () => console.log(`Server running on port: ${port}`));
