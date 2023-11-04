const express = require('express');

const router = express.Router();

var admin = require("firebase-admin");

router.get('/status', (req, res) =>   {
    const status = req.params.uid;

    // Verify uid && data
    if (!status) {
        res.statusCode = 400;
        res.send("Error: status is undefined");
        return;
    }
    if(status == "Pending"){
        res.send("Requires Verification!")
        
    } else{
        res.send("Requires Verification!")
    }

});