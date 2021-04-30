const { Schema, model, pluralize } = require('mongoose');
pluralize(null)

const cardsSchema = new Schema({
  question: String,
  answers: Array,
  rightAnswer: String,
  theme: String,
});

const Cards = model('Cards', cardsSchema)
module.exports = Cards
