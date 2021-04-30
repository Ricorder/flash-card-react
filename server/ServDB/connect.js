const { connect } = require('mongoose')
const { dbConnectionURL, options } = require('./config')
const app = require("../app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started ', PORT)
  connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err)
    console.log('DB started')
  })
})

module.exports = connect
