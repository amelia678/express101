// Express is node, a node module
const http = require('http');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.all('/', (req, res) => {
    console.log(path.join(__dirname + '/node.html'))
    res.sendFile(path.join(__dirname + '/node.html'))
//  res.send('<h1>This is the homepage</h1>')
});

app.listen(8000)

console.log('the server is listening on port 3000')