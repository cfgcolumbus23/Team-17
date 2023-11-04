const express = require('express');

const profile = require('./profileControl/profile');
const points = require ('./incentiveControl/incentive');


const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/profile', profile);
router.use('/incentive', points);

module.exports = router;
