const { Pool } = require('pg');
const dotenv = require('dotenv');

// Create a new pool object with the connection details
const pool = new Pool({
  user: process.env.DB_USER_NAME,
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

// Export the pool object for use in other modules
module.exports = pool;