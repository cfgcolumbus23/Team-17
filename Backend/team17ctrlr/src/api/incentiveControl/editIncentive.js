const express = require('express');

const router = express.Router();

var admin = require("firebase-admin");


router.post('/editIncentive', (req, res) =>   {
    const uid = req.body.uid;
    const levels = req.body.levels;
    const xp = req.body.xp;
    const totalPoints = req.body.totalPoints;
    
    

    admin.app().firestore().collection('Points').doc(uid).update(levels,xp,totalPoints).then((snapshot) => {
        res.send("Points successfully updated!");
        console.log("Points successfully updated!");
        return snapshot;
    }).catch((error) => {
        res.send("Error updating points: ", error);
        console.error("Error updating points: ", error);
    });
    
});

module.exports = router;