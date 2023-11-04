const express = require('express');

const router = express.Router();

var admin = require("firebase-admin");



//  router.get('/getProfile[]', (req, res) =>   {
//     const uid = req.body.uid;

//     // Verify uid && data
//     if (!uid) {
//         res.statusCode = 400;
//         res.send("Error: uid is undefined");
//         return;
//     }


//     admin.app().firestore().collection('Users').doc(uid).get().then((snapshot) => {
//         console.log("Document successfully retrieved!");

//         res.send(snapshot.data());


//         return snapshot;
//     }).catch((error) => {
        
//         console.error("Error retrieving document: ", error);
//         res.statusCode = 400;
//         // 400 
//         res.send("Error retrieving document: ", error);
//     });
    
// });

// /getProfile/:uid
router.get('/:uid', (req, res) =>   {
    const uid = req.params.uid;

    // Verify uid && data
    if (!uid) {
        res.statusCode = 400;
        res.send("Error: uid is undefined");
        return;


    }
    //Retrieve Users from database
    admin.app().firestore().collection('Users').doc(uid).get().then((snapshot) => {
        console.log("Document successfully retrieved!");

        res.send(snapshot.data());


        return snapshot;
    }).catch((error) => {
        
        console.error("Error retrieving document: ", error);
        res.statusCode = 400;
        // 400 
        res.send("Error retrieving document: ", error);
    });



});


module.exports = router;










module.exports = router;
