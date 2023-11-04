const express = require('express');

const router = express.Router();

const createIncentive = require('./createIncentive');

const getIncentive = require('./getIncentive');


router.use('/createIncentive', createIncentive);
router.use('/editIncentive', getIncentive);

router.get('/', (req, res) => {
    res.json({
        message: 'API - 👋🌎🌍🌏',
    });
    });


module.exports = router;