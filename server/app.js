const express = require('express');
const app = express();
const logger = require('morgan');
const fs = require('fs');
const cors = require('cors');

const themeCardRouter = require('./routes/themeCardRouter');
const userRouter = require('./routes/userRouter');

app.use(logger('dev'));
app.use(logger('common', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
app.use(express.json());
app.use(cors);
// app.use(express.urlencoded({extended: true}));

app.use('/', themeCardRouter);
app.use('/user', userRouter);

module.exports = app;
