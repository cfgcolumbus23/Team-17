const express = require('express');
//used to test each of our endpoints
const profile = require('./profileControl/profile');
const points = require ('./incentiveControl/incentive');

const certificate = require('./certificate/certificatesEndpoint');

const certifications = require('./certifications')
const adminReports = require('./AdminReportsEndpoint')


const leaderboard = require('./leaderboardControl/leaderboard');

const verify = require('./certificate/verify')

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



router.use('/leaderboard', leaderboard);

router.use('/verify', verify)

router.use("/certifications", certifications)

module.exports = router;
