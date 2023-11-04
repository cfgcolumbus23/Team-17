const express = require('express');

const router = express.Router();

//const apik = require("./apiKey")

var admin = require("firebase-admin");

  router.get('/adminReports', async (req, res) => {
    var result = await admin.app().firestore().collection("Users").listDocuments();
    
    if (!result) {
        res.statusCode = 400;
        res.send("Error: No user data found");
        return;
    }
    var objArray = [];
        for (let i in result) { 


          // if (i.id){
            var object = {
                user: admin.app().firestore().collection('Users').doc(i.id),
                points: admin.app().firestore().collection('Points').doc(i.id),
                certificates: admin.app().firestore().collection('Certificates').doc(i.id)
            }
          // }
        objArray.push(object);
    }
  return objArray;
});
  

module.exports = router;