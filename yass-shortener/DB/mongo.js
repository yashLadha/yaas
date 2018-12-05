const mongoose = require('mongoose')
const mongodb = 'mongodb://127.0.0.1/yaas'
mongoose.connect(
  mongodb,
  { useNewUrlParser: true }
)
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error: '))

module.exports = db
