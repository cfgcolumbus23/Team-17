var admin = require("firebase-admin");
const express = require('express');
const  router = express.Router();


router.post('/', async (req,res) => {
    const reqxp = parseInt(req.body.xp);

    console.log("REQUEST XP: " + reqxp);
    //const uid = req.body.uid;
    const uid = 'ir2Dd0EAsqc07zfAWQAQ';
    var result = await admin.app().firestore().collection('Points').doc(uid).get();
    //console.log(result);

    var xp = parseInt(result.data().xp) + reqxp;
    var level = result.data().level;
    var totalPoints = result.data().totalPoints;

    if(xp >= 2000){
        //Update xp and levels
        level = level + xp/2000;

        xp = xp % 2000;
    }

    console.log("NEW XP: " + xp);




    admin.firestore().collection('Points').doc(uid).update({'xp':xp, 'level':level, 'totalPoints':totalPoints}).then((snapshot) =>
        {
            console.log("Incentive updated successfully");
            res.send("Incentive updated successfully");
            return snapshot;
        }
    ).catch((error)=> {
        console.log("Error updating incentive" , error);
        res.send("Error updating incentive", error);
    })
});
module.exports = router;
