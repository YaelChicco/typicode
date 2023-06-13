const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors=require('cors');

app.use(cors());
app.use(express.json());

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lq2p0J8h",
  database: "fullStackDb" // Replace "your_database_name" with the actual name of your database

});

// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database: ', error);
  } else {
    console.log('Connected to the database');
  }
});

// Define the route to handle the /users endpoint
app.get('/login', (req, res) => {
  const { username } = req.query;

  // Execute the query to retrieve user data based on the username
  const query = 'SELECT * FROM newusers WHERE username = ?';
  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error executing the query: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        // User found, send the user data as JSON response
        res.json(results);
        console.log(res);
      } else {
        // User not found
        res.status(404).json({ error: 'User not found' });
      }
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});