var admin = require("firebase-admin");
const express = require('express');
const  router = express.Router();


router.get('/',(req,res) => {
    const uid = 'ir2Dd0EAsqc07zfAWQAQ';
    //const uid = req.body.uid;
    //Return users level, xp, and total points
    return admin.app().firestore().collection('Points').doc(uid).get()
});

module.exports = router