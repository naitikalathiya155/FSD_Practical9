const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.type('text/plain').send('Welcome to our site');
});

module.exports = router;
