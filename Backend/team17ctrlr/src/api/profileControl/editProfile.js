const express = require('express');

const router = express.Router();

var admin = require("firebase-admin");


router.put('/editProfile', (req, res) =>   {
    const uid = req.body.uid;
    const modified = req.body.modified;

    // Verify uid && data
    if (!uid) {
        res.statusCode = 400;
        res.send("Error: uid is undefined");
        return;
    }

    if (!modified) {
        res.statusCode = 400;
        res.send("Error: modified is undefined");
        return;
    }
    
    

    admin.app().firestore().collection('Users').doc(uid).update(modified)
    .then((snapshot) => {
        res.send("Document successfully updated!");
        console.log("Document successfully updated!");
        return snapshot;
    })
    .catch((error) => {
        res.statusCode = 400;
        res.send("Error updating document: ", error);
        console.error("Error updating document: ", error);
    });

});

module.exports = router;
