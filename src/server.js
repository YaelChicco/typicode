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


app.get('/login', (req, res) => {
  const { username } = req.query;

  // Execute the query to retrieve user data based on the username
  const query = 'SELECT * FROM newusers WHERE username = ?';
  connection.query(query, [username], (error, results) => {
    if (error) {
        console.error('Error executing the query: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } else {
        res.json(results);
    }
  });
});

 // Define the route to handle the /users endpoint
 app.get('/users', (req, res) => {
    const { username } = req.query;
  console.log(username);
    // Execute the query to retrieve user data based on the username
    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], (error, results) => {
        if (error) {
            console.error('Error executing the query: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});


app.get('/albums', (req, res) => {
    const { userId } = req.query;
  
    // Execute the query to retrieve user data based on the userId
    const query = 'SELECT * FROM albums WHERE userId = ?';
    connection.query(query, [userId], (error, results) => {
        if (error) {
            console.error('Error executing the query: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
  });

  app.get('/photos', (req, res) => {
    const { albumId, _start, _limit } = req.query;
  
    // Execute the query to retrieve photos based on the albumId and pagination parameters
    const query = 'SELECT * FROM photos WHERE albumId = ? LIMIT ?, ?';
    connection.query(query, [parseInt(albumId), parseInt(_start), parseInt(_limit)], (error, results) => {
      if (error) {
        console.error('Error executing the query: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  app.post('/register', (req, res) => {
    const {name,username,email,street,city,phone, password } = req.body;
    // Perform validation checks on the username and password
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    if (password.length < 4) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }
  
    const query = 'INSERT INTO newusers (username, password) VALUES (?, ?)';
    connection.query(query, [username, password], (error, results) => {
      if (error) {
        console.error('Error executing the query: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'User registered successfully' });
      }
    });
    const query2 = 'INSERT INTO users (name, username, email, street, suite, city, zipcode, lat, lng, phone, website, company_name, catch_phrase, bs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query2, [name, username, email, street, null, city, null, null, null, phone, null, null, null, null], (error, results) => {
      if (error) {
        console.error('Error executing the query: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'User registered successfully' });
      }
    });
  
  });


// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});