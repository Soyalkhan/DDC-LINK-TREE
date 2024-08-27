const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const cors = require("cors");  // Add this line
// Load environment variables
dotenv.config({ path: './.env' });

// Connect to database
connectDB();


const app = express();

// Enable CORS for all origins
app.use(cors());

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Mount routers
app.use('/api/auth', require('./routes/authRoutes'));

module.exports = app;  // Export the app instance
