const express = require('express');

const profile = require('./profileControl/profile');
const points = require ('./incentiveControl/createIncentive');

const certificate = require('./certificate/certificatesEndpoint');


const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/profile', profile);
router.use('/incentive', points);

router.use('/certificate', certificate);



module.exports = router;
