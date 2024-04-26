// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000; // Choose any port you like


// // app.get('/', (req, res) => {
// //   res.send('Hello World');
// // });


// app.use(express.static('static'))

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
