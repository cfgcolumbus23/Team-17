const express = require('express');
const router = express.Router();
var admin = require("firebase-admin");

/* router.get('/', async (req, res) => {
    //Get results ordered by level descending
    const collectionRef = await admin.app().firestore().collection('Points').orderBy('level', 'desc').get();
    console.log(collectionRef);
    res.send(collectionRef);
    const results = [];
    collectionRef.forEach(async(doc) => {
        const userID = doc.data().uid;
        const userRef = await admin.app().firestore().collection('User').doc(userID).get();
        //Add results to the list
        var username = userRef[0].data().username;
        var pointInfo = doc.data();
        results.push({pointInfo,username})
        //Return list
        console.log(results);
        res.send(results);
    }).catch((error)=>{
        console.log("Error querying points ", error);
        res.send("Error querying points ", error);
    });
}); */
//method to get and sort users based on level
router.get('/', async (req, res) => {
    try {
        // Get results ordered by level descending
        const collectionRef = await admin.app().firestore().collection('Points').listDocuments();
        if (!collectionRef || collectionRef.length == 0) {
            res.status(400).send("Error: No Points data found");
            return;
        }
        const db = admin.app().firestore();

        const results = [];
        const userPromises = collectionRef.map(async (doc) => {
            console.log(doc.id);
            const userStuff = await db.collection('Users').doc(doc.id).get();
            const pointStuff = await db.collection('Points').doc(doc.id).get();

            const points = pointStuff.data();
            //console.log(users);
            return {
                //id: doc.id,
                username: userStuff.data().username,
                level: points.level,
                xp: points.xp,
                totalPoints: points.totalPoints
            }
        });
        //ObjArray to get sort Order
        const objArray = await Promise.all(userPromises);
        console.log(objArray);
        //Comparer Function    
        function GetSortOrder(prop) {
            return function (a, b) {
                if (a[prop] > b[prop]) {
                    return -1;
                } else if (a[prop] < b[prop]) {
                    return 1;
                }
                return 0;
            }
        }
        objArray.sort(GetSortOrder('level'));
        objArray.forEach(element => {
            results.push(element);
        });
        // Return list
        console.log(results);
        res.send(results);
    } catch (error) {
        console.log("Error querying points", error);
        res.status(500).send("Error querying points");
    }
});


module.exports = router