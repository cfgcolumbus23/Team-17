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

        res.send("Document successfully created!");

        return snapshot;
    }).catch((error) => {
        console.error("Error creating document: ", error);
        // 400 
        res.send("Error creating document: ", error);
    });

    
});


// router.


module.exports = router;
