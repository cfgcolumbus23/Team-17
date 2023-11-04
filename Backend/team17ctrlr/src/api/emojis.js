const express = require('express');

const router = express.Router();
//Emojis for results of test
router.get('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

module.exports = router;
