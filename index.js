const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;

//localhost:3000
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/index.html');
    
});

app.listen(port , () => {
    console.log(`Backend is running on port ${port}`);
});