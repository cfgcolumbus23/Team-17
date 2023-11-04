const express = require('express');

const router = express.Router();

const getNeedAddresses = require('./getIfNeedAddresses');

router.use('/getIfNeedAddresses', getNeedAddresses);

module.exports = router;