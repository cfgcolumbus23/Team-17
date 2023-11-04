const express = require('express');

const router = express.Router();

const createIncentive = require('./createIncentive');

const editIncentive = require('./editIncentive');


router.use('/createIncentive', createIncentive);
router.use('/editIncentive', editIncentive);

router.get('/', (req, res) => {
    res.json({
        message: 'API - 👋🌎🌍🌏',
    });
    });


module.exports = router;