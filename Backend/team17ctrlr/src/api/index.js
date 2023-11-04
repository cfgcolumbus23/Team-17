const express = require('express');

const profile = require('./profileControl/profile');
const points = require ('./incentiveControl/incentive');

const certificate = require('./certificate/certificatesEndpoint');

const adminReports = require('./AdminReportsEndpoint')


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





module.exports = router;
