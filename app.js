'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/contact', (req, res) => {
  res.send('Contact page');
});


app.get('/others', (req, res) => {
  res.send('Others page');
});


app.get('/test', (req, res) => {
  res.send('Test page');
});


app.get('/api', (req, res) => {
  res.json({ 'response': "Hello API" });
});



app.listen(PORT, () => {
    console.log({
        node: `http://localhost:${PORT}`
    })
})