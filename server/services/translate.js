const axios = require('axios');

const translateText = async (text, targetLang) => {
  try {
    const res = await axios.post('https://libretranslate.de/translate', {
      q: text,
      source: 'en',
      target: targetLang,
      format: 'text'
    }, {
      headers: { 'Content-Type': 'application/json' }
    });
    return res.data.translatedText;
  } catch (err) {
    console.error(`❌ Translation error to ${targetLang}:`, err);
    return text; // fallback to original
  }
};

module.exports = translateText;
