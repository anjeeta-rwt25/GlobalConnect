const axios = require("axios");

const translateText = async (text, targetLang) => {
  try {
    const response = await axios.post("https://libretranslate.de/translate", {
      q: text,
      source: "auto",
      target: targetLang,
      format: "text",
    }, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data.translatedText;
  } catch (error) {
    console.error("Translation failed:", error.message);
    return text;
  }
};

module.exports = translateText;
