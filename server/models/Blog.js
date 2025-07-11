const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  author: String,
  contentOriginal: String,
  originalLanguage: String,
  contentTranslated: {
    en: String,
    hi: String,
    es: String,
    fr: String,
    ja: String
  },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
