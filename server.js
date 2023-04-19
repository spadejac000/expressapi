const express = require('express');
const app = express();

const port = 5000;

app.get('/testdb', async (req, res) => {
  try {
    const result = await pool.query('SELECT $1::text as message', ['Hello world!']);
    const message = result.rows[0].message;
    res.send(`Message from database: ${message}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error connecting to database');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});