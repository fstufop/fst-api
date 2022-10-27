const express = require('express');
const app = express();

const getContacts = require('./routes/contacts');
app.use('/contacts', getContacts);

module.exports = app;