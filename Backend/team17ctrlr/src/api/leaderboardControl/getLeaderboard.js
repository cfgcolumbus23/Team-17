const express = require('express');


const express = require('express');
const router = express.Router();
var admin = require("firebase-admin");

router.get('/', (req, res) => {
    const collectionRef = admin.app().firestore().collection('Points').orderBy('level', 'desc');
    collectionRef.get().then((snapshot)=>{
        const results = [];
        snapshot.forEach(element => {
            results.push(element.data())
        });
        console.log(results);
        res.send(results);
    }).catch((error)=>{
        console.lot("Error querying points ", error);
        res.send("Error querying points ", error);
    });
});




