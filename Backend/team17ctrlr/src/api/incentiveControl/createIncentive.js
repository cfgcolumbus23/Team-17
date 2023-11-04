const app = require('./app');
var admin = require("firebase-admin");
const express = require('express')
var serviceAccount = require("../.ctrl-r-team17-firebase-adminsdk-bnuam-9e38dd5e9b.json");
const  router = express.Router();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

router.get('/', async (req,res) => {
    const uid = req.body.uid;

    var result = await admin.app().firestore().collection('Points').doc(uid).get();
    console.log(result)
    res.send(result)
    //Check if they reached the next level
    
    /*
    
    

    if(xp >= 2000){
        //Update xp and levels
        levels = levels + xp/2000;
        xp = xp % 2000;
    }
    */




    admin.firestore.collection('Points').doc(uid).set(xp,levels,totalPoints).then((snapshot) =>
        {
            console.log("Incentive updated successfully");
            res.send("Incentive updated successfully");
            return snapshot;
        }
    ).catch((error)=> {
        console.log("Error updating incentive" , error);
        res.send("Error updating incentive", error);
    })
})
module.exports = router
