const express = require('express');
const router = express.Router();
var admin = require("firebase-admin");

router.get('/', (req, res) => {
    //Get results ordered by level descending
    const collectionRef = admin.app().firestore().collection('Points').orderBy('level', 'desc');
    collectionRef.get().then((snapshot)=>{
        const results = [];
        //Add results to the list
        snapshot.forEach(element => {
            results.push(element.data())
        });
        //Return list
        console.log(results);
        res.send(results);
    }).catch((error)=>{
        console.lot("Error querying points ", error);
        res.send("Error querying points ", error);
    });
});

module.exports = router