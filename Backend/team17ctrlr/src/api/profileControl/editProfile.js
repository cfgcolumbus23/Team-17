const express = require('express');

const router = express.Router();

var admin = require("firebase-admin");


router.post('/editProfile', (req, res) =>   {
    const uid = req.body.uid;
    const modified = req.body.modified;
    
    

    admin.app().firestore().collection('Users').doc(uid).update(modified).then((snapshot) => {
        res.send("Document successfully updated!");
        console.log("Document successfully updated!");
        return snapshot;
    }).catch((error) => {
        res.send("Error updating document: ", error);
        console.error("Error updating document: ", error);
    });
    
});

module.exports = router;
