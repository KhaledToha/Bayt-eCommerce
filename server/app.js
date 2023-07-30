const express = require('express');
const Router = require('./routers');
const { errorHandler, clientError } = require('./middleware');
require('dotenv').config();

const app = express();
const { PORT } = process.env.PORT;

app.set('port', PORT || 4000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', Router, clientError, errorHandler);

module.exports = app;
