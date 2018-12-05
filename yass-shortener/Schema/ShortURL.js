let mongoose = require('mongoose')

/**
 * Schema for the Short URL
 * Attributes:
 * shortURLCode: Shortened code for the URL
 * origURL: Original URL
 * doc: Date of creation
 * */
let ShortURLSchema = new mongoose.Schema({
  shortURLCode: String,
  origURL: String,
  doc: Date,
})

module.exports = mongoose.model('ShortURL', ShortURLSchema)
