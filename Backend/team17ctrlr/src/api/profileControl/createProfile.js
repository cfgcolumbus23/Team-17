const express = require('express');

const router = express.Router();

var admin = require("firebase-admin");

router.post('/', (req, res) =>   {
    const uid = req.body.uid;
    const data = req.body.data;
    
    // Verify uid && data
    if (!uid) {
        res.statusCode = 400;
        res.send("Error: uid is undefined");
        return;
    }

    if (!data) {
        res.statusCode = 400;
        res.send("Error: data is undefined");
        return;
    }
 
    admin.app().firestore().collection('Users').doc(uid).set(data).then((snapshot) => {
        console.log("Document successfully created!");

        admin.firestore().collection('Points').doc(uid).set({'xp':100, 'level':1, 'totalPoints': 1000}).then((snapshot) =>
        {
            console.log("Incentive updated successfully");
            res.send("Incentive updated successfully");
            return snapshot;
        }
    ).catch((error)=> {
        console.log("Error updating incentive" , error);
        res.send("Error updating incentive", error);
    })

        

        res.send("Document successfully created!");

        return snapshot;
    }).catch((error) => {
        
        console.error("Error creating document: ", error);
        res.statusCode = 400;
        // 400 
        res.send("Error creating document: ", error);
    });

    
});


// router.


module.exports = router;
