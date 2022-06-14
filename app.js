'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

server.listen(PORT, () => {
    console.log({
        node: `http://localhost:${PORT}`
    })
})