const express = require('express');

const profile = require('./profileControl/profile');

const points = require ('./incentiveControl/incentive');

const certificate = require('./certificate/certificatesEndpoint');

const adminReports = require('./AdminReportsEndpoint')

const leaderboard = require('./leaderboardControl/leaderboard');

const addresses = require('./addressControl/address');

const verify = require('./certificate/verify');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/profile', profile);

router.use('/incentive', points);

router.use('/certificate', certificate);

router.use('/adminReport', adminReports);

router.use('/address', addresses);

router.use('/leaderboard', leaderboard);

router.use('/verify', verify);



module.exports = router;
