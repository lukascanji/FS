const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET request at /hello
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// GET request at /user with query parameters
app.get('/user', (req, res) => {
  const { firstname, lastname } = req.query;
  res.json({ firstname, lastname });
});

// POST request at /user/:firstname/:lastname
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
