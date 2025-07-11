const express = require('express');
const router = express.Router();  // ✅ This line was missing!

const Blog = require('../models/Blog');
const translateText = require('../services/translate');

// now you can use router.post()
router.post('/', async (req, res) => {
  const { author, content } = req.body;
  console.log('📩 Received Blog:', { author, content });

  if (!author || !content) {
    return res.status(400).json({ error: 'Author and content required' });
  }

  try {
    const translated = {
      en: content,
      hi: await translateText(content, 'hi'),
      es: await translateText(content, 'es'),
      fr: await translateText(content, 'fr'),
      ja: await translateText(content, 'ja'),
    };

    const blog = new Blog({ author, content, translated });
    const saved = await blog.save();
    console.log('✅ Blog Saved:', saved);
    res.status(201).json(saved);
  } catch (err) {
    console.error('❌ Blog Save Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch blogs' });
  }
});

module.exports = router;
