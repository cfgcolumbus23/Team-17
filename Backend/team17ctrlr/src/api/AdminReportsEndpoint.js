const express = require('express');

const router = express.Router();

//const apik = require("./apiKey")

var admin = require("firebase-admin");

  router.get('/adminReports', async (req, res) => {
    var result = await admin.app().firestore().collection("Users");
    if (!result) {
        res.statusCode = 400;
        res.send("Error: No user data found");
        return;
    }
    var objArray = [];
        for (let i in result.listDocuments()) { console.log(i);
            var object = {
                user: result.doc(i),
                points: admin.app().firestore().collection('Points').doc(i),
                certificates: admin.app().firestore().collection('Certificates').doc(i)
            }
        objArray.push(object);
    }
  return objArray;
});
  

module.exports = router;