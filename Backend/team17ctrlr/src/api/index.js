const express = require('express');

const profile = require('./profileControl/profile');


const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/profile', profile);

module.exports = router;
