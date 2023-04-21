const express = require('express');
const app = express();
app.use(express.json());

const path = require('path')

const fs = require('fs');
const vuebuildfiles = fs.readdirSync(path.resolve('./dist/assets'));

const port = 3000;

var tasks = [];

//localhost:3000
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(path.resolve('./dist/index.html'));
    
});

app.get('/assets/:filename', function(req, res){
    console.log(req.params.filename)
    res.sendFile(path.resolve('./dist/assets/' + req.params.filename));
});

app.get('/favicon.ico', (req,res) => {
    res.sendFile(path.resolve('./dist/favicon.ico'));
})

app.get('/getTasks', (req, res) => {
    res.send(tasks);
});

app.post('/addTask', (req, res) => {
    tasks.push(req.body);
    res.send(req.body);
});

app.listen(port , () => {
    console.log(`Backend is running on port ${port}`);
});