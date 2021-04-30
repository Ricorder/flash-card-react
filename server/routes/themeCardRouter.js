const mainRouter = require('express').Router();

const {
  allThemeRender,
  addCard,
  finalCard,
  resultRender,
} = require('../controllers/themeCardController');

mainRouter.route('/')
  .get(allThemeRender)
  .post(addCard)

mainRouter.route('/')
  .get(allThemeRender)

mainRouter.route('/themes/:name/:index')
  .post(finalCard)

mainRouter.route('/results/:name')
  .get(resultRender) 

module.exports = mainRouter

