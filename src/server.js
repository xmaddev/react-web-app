const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
// ADD THIS

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react_db',
});

app.get('/api/get', (req, res) => {
  res.header( "Access-Control-Allow-Origin" );
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    } else {
      res.json({results});
    }
  });
});
app.post('/api/post', (req, res) => {
  const username = req.body.username;

  const sql = 'INSERT INTO users(username) VALUES(?)';
  connection.query(sql, [username], (error, results) => {
    if (error) {
      console.log(error);
      res.status(401).send('Unauthorized');
    } else {
      res.json({results});
    }
  });
});
app.listen(5000, () => {
  console.log('Server is listening on port 3000');
});
