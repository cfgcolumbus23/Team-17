const express = require('express');

const router = express.Router();

var admin = require("firebase-admin");

router.post('/requestVerification', (req, res) => { 
    console.log("request")
    var uid = req.body.uid
    var certificationID = req.body.certificationID

    if (!uid) {
        res.statusCode = 400;
        res.send("Error: uid is undefined");
        return;
    }

    if (!certificationID) {
        res.statusCode = 400;
        res.send("Error: modified is undefined");
        return;
    }
    var data = {status: "Pending", uid: uid, certificationID: certificationID}
    admin.app().firestore().collection('Verifications').doc(uid).set(data).then((snapshot) => {
        console.log("Document successfully created!");

        // WRITE ADMIN LOG STUFF HERE


        // const currentDate = new Date();
        // admin.firestore().collection('AdminLogs').doc().set({'date':currentDate, 'message', 'totalPoints': 1000}).then((snapshot) =>
        // {
        //     console.log("Incentive updated successfully");
        //     res.send("Incentive updated successfully");
        //     return snapshot;
        // }
        return snapshot

    })
    .catch((error)=> {
        console.log("Error updating verification" , error);
        res.send("Error updating verification", error);
    })
})


// router.post('/approveVerification', (req, res) => { 
//     var uid = req.body.uid
//     var certificationID = req.body.certificationID

//     if (!uid) {
//         res.statusCode = 400;
//         res.send("Error: uid is undefined");
//         return;
//     }

//     if (!certificationID) {
//         res.statusCode = 400;
//         res.send("Error: modified is undefined");
//         return;
//     }
//     var data = {status: "Pending", uid: uid, certificationID: certificationID}
//     admin.app().firestore().collection('Verifications').doc(uid).set(data).then((snapshot) => {
//         console.log("Document successfully created!");
//         return snapshot

//     })
//     .catch((error)=> {
//         console.log("Error updating verification" , error);
//         res.send("Error updating verification", error);
//     })
// })