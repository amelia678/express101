const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send(`<h1>Welcome to the home GET page`)
})
// analagous to retrieve in CRUD

app.post('/', (req, res) => {
    res.send(`<h1>Welcome to the home POST page`)
})

// app.listen(8000)