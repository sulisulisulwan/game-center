const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.resolve(__dirname, '../client/dist')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
