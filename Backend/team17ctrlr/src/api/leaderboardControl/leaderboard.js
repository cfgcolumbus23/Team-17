const express = require('express');

const router = express.Router();

const getLeaderboard = require('./getLeaderboard');

router.use('/getLeaderboard', getLeaderboard);
module.exports = router;