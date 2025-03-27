require('dotenv').config()
// server.js
const express = require('express');
const dbConnection = require('./config/db');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello, MERN Stack!');
});

 
app.listen(5000, () => {
    console.log('Server is running on port 5000');
    dbConnection();
});
