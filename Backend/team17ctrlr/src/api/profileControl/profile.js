const express = require('express');

const router = express.Router();

const createProfile = require('./createProfile');

const editProfile = require('./editProfile');

const getProfile = require('./getProfile');

//Main hub to create edit and get profile
router.use('/createProfile', createProfile);
router.use('/editProfile', editProfile);
router.use('/getProfile', getProfile);

router.get('/', (req, res) => {
    res.json({
        message: 'API - 👋🌎🌍🌏',
    });
    });


module.exports = router;
