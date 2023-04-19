const express = require('express');
const app = express();
app.use(express.json());

const port = 9000;

//localhost:9000
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});