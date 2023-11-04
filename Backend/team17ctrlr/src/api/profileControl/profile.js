const express = require('express');

const router = express.Router();

const createProfile = require('./createProfile');

const editProfile = require('./editProfile');

const getProfile = require('./getProfile.js');

// const getProfile = require('./profileControl/getProfile');


router.use('/createProfile', createProfile);
router.use('/editProfile', editProfile);
router.use('/getProfile', getProfile);

router.get('/', (req, res) => {
    res.json({
        message: 'API - 👋🌎🌍🌏',
    });
    });


module.exports = router;
