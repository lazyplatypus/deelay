#! /usr/bin/env node

const deelay = require('../index.js');
const http = require('http');
const port = process.env.PORT || 4567;

http.createServer((req, res) => deelay(req, res, process.stdout)).listen(4567, '0.0.0.0', err => {
    if (err) throw err
    console.log(`Listening on port ${port}`)
  });
