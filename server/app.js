const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const mainRouter = require('./routes/main');
const logger = require('morgan');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', mainRouter);

module.exports = app;
