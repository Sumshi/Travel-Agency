const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// Route for the index page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'about.html'));
});

// 404 error for files that do not exist
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'static', '404.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
