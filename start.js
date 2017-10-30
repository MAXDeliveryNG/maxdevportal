'use strict';

//load environment config
require('dotenv').config();

const path = require('path');
const express = require('express');
 
let app = express()

//set server port
app.set('port', process.env.PORT || 5050);

//set static folders
app.use(express.static(path.resolve(__dirname, './public')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Listen on provided port, on all network interfaces.
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})