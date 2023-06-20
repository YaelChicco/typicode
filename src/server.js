/* const express = require('express');
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

  app.get('/posts', (req, res) => {
    const { userId } = req.query;
  
    // Execute the query to retrieve user posts based on the userId
    const query = 'SELECT * FROM posts WHERE userId = ?';
    connection.query(query, [userId], (error, results) => {
        if (error) {
            console.error('Error executing the query: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
  });

  app.get('/todos', (req, res) => {
    const { userId } = req.query;
  
    // Execute the query to retrieve user todos based on the userId
    const query = 'SELECT * FROM todos WHERE userId = ?';
    connection.query(query, [userId], (error, results) => {
        if (error) {
            console.error('Error executing the query: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
  });

  app.post('/todos', (req, res) => {
    const { title, completed } = req.body;
  
    // Perform validation checks on the title and completed fields
    if (!title || typeof completed !== 'boolean') {
      return res.status(400).json({ error: 'Invalid todo data' });
    }
  
    // Create the SQL query to insert the new todo into the MySQL database
    const query = 'INSERT INTO todos (title, completed) VALUES (?, ?)';
    pool.query(query, [title, completed], (error, results) => {
      if (error) {
        console.error('Error executing the query: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        const newTodo = { id: results.insertId, title, completed };
        res.status(201).json(newTodo);
      }
    });
  });
    

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
}); */

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

app.get('/todos', (req, res) => {
  const { userId } = req.query;
  const query = 'SELECT * FROM todos WHERE userId = ?';
  connection.query(query, [userId], (error, results) => {
      if (error) {
          console.error('Error executing the query: ', error);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          res.json(results);
      }
  });
});
// post request to add a todo
app.post('/todos', (req, res) => {
  const { userId, title, completed } = req.body;

  if (!userId || !title) {
    return res.status(400).json({ error: 'User ID and title are required' });
  }

  const query = 'INSERT INTO todos (userId,  title, completed) VALUES (?, ?, ?)';
  connection.query(query, [userId, title, completed], (error, results) => {
    if (error) {
      console.error('Error executing the query: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'Todo added successfully' });
    }
  });
});

// Edit the todos
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const query = 'UPDATE todos SET title = ?, completed = ? WHERE id = ?';
  connection.query(query, [title, completed, id], (error) => {
    if (error) {
      console.error('Error executing the query: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'Todo updated successfully' });
    }
  });
});

// delete a todo
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;

  // Execute the query to delete the todo with the given id
  const query = 'DELETE FROM todos WHERE id = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error executing the query: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'Todo deleted successfully' });
    }
  });
});

app.get('/posts', (req, res) => {
  const { userId } = req.query;
  const query = 'SELECT * FROM posts WHERE userId = ?';
  connection.query(query, [userId], (error, results) => {
      if (error) {
          console.error('Error executing the query: ', error);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          res.json(results);
      }
  });
});

// Request for adding a post
app.post('/posts', (req, res) => {
  const { userId, title, body } = req.body;

  if (!userId || !title || !body) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const query = 'INSERT INTO posts (userId, title, body) VALUES (?, ?, ?, ?)';
  connection.query(query, [userId, title, body], (error, results) => {
    if (error) {
      console.error('Error executing the query: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const newPostId = results.insertId;
      const newPost = { id: newPostId, userId, title, body };
      res.status(200).json(newPost);
    }
  });
});
app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const query = 'UPDATE todos SET title = ?, completed = ? WHERE id = ?';
  connection.query(query, [title, completed, id], (error) => {
    if (error) {
      console.error('Error executing the query: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'Todo updated successfully' });
    }
  });
});

app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM posts WHERE id = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error executing the query: ', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'Post deleted successfully' });
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