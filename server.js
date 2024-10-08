const app = require('./app');  // Import the app instance from app.js
const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");  // Add this line


const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1)); 
});
