// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'build')));

// For all GET requests, send back index.html so React can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Set the port from the environment, or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
