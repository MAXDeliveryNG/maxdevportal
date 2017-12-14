'use strict';

//load environment config
require('dotenv').config();

const path = require('path');
const request = require('request');
const express = require('express');
 
let app = express()

//set server port
app.set('port', process.env.PORT || 5050);

app.use('/v1', function(req, res) {
  let url = process.env.API_URL + req.url;
  console.info('Proxing to: ', url);

  var r = null;

  switch (req.method) {
    case 'POST':
      r = request.post({
        uri: url,
        json: req.body
      });
      return req.pipe(r).pipe(res);
    case 'PUT':
      r = request.put({
        uri: url,
        json: req.body
      });
      return req.pipe(r).pipe(res);

    default:
      r = request(url);
      return req.pipe(r).pipe(res);
  }
});

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