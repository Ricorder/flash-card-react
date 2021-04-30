const express = require('express');
const app = express();
const logger = require('morgan');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const hbs = require('hbs');

const mainRouter = require('./routes/main');
const userRouter = require('./routes/userRouter');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(logger('common', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', mainRouter);
app.use('/user', userRouter);

module.exports = app;
