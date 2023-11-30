require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');

const app = express();


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectTimeout: parseInt(process.env.DB_CONNECT_TIMEOUT)


});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión a la base de datos exitosa');
});
