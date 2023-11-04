const express = require('express');

const router = express.Router();

var admin = require("firebase-admin");
//try-catch to get adminReports
router.get('/adminReports', async (req, res) => {
  try {
    const result = await admin.app().firestore().collection("Users").listDocuments();

    if (!result || result.length === 0) {
      res.status(400).send("Error: No user data found");
      return;
    }
    //Map the results for the Users, Points, and Certificates so the front end can iterate the information to the admin
    const userPromises = result.map(async (doc) => {
      const snapshot = await admin.app().firestore().collection('Users').doc(doc.id).get();
      const pounts = await admin.app().firestore().collection('Points').doc(doc.id).get();
      const status = await admin.app().firestore().collection('Verifications').doc(doc.id).get();
      const certificate = await admin.app().firestore().collection('Certificates').doc(doc.id).get();

      //If the user's status is pending, we'll notify the admin that verification is needed
      //res.send(status);
      var pending = false;
      if(status){
        //console.log(status.status);
        //status.status = "Pending";
        if(status.status == "Pending"){
          pending = true;
        }
      }
      const users = snapshot.data();
      console.log(users);
      return {
        id: doc.id,
        user: users,
        points: pounts.data(),
        status: pending,
        certificate: certificate.data()
      };
    });
    //wait for the completion of the operation and then output the array
    const objArray = await Promise.all(userPromises);

    res.json(objArray);
  } catch (error) {
    console.error("Error in adminReports:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
