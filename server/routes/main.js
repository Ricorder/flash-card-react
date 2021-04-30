const mainRouter = require('express').Router();

const {
  allThemeRender,
  addCard,
  finalCard,
  resultRender,
} = require('../controllers/todoController');

mainRouter.route('/')
  .get(allThemeRender)
  .post(addCard)

mainRouter.route('/')
  .get(allThemeRender)

mainRouter.route('/category/:name/:index')
  .post(finalCard)

mainRouter.route('/results/:name')
  .get(resultRender) 

module.exports = mainRouter

