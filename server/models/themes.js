const { Schema, model, pluralize } = require('mongoose');
pluralize(null)

const themeSchema = new Schema({
  name: String,
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Cards',
  }]
});

const theme = model('Theme', themeSchema)
module.exports = theme
