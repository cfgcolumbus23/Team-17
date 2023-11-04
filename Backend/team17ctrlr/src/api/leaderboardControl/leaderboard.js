const express = require('express');

const router = express.Router();

const getLeaderboard = require('./getLeaderboard');
//Gets user leaderboard 
router.use('/getLeaderboard', getLeaderboard);
module.exports = router;