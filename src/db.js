// fichier original (db.js)
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydatabase'
});

module.exports = pool;

