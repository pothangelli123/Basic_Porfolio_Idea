const express = require('express');
const pg = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new pg.Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

app.get('/data', (req, res) => {
  pool.query('SELECT * FROM your_table', (error, result) => {
    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result.rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
