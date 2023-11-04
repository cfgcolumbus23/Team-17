const express = require('express');

const router = express.Router();

var admin = require("firebase-admin");

router.get('/adminReports', async (req, res) => {
  try {
    const result = await admin.app().firestore().collection("Users").listDocuments();

    if (!result || result.length === 0) {
      res.status(400).send("Error: No user data found");
      return;
    }

    const userPromises = result.map(async (doc) => {
      const snapshot = await admin.app().firestore().collection('Users').doc(doc.id).get();
      const pounts = await admin.app().firestore().collection('Points').doc(doc.id).get();
      const certificate = await admin.app().firestore().collection('Certificates').doc(doc.id).get();


      const users = snapshot.data();
      console.log(users);
      return {
        id: doc.id,
        user: users,
        points: pounts.data(),
        certificate: certificate.data()
      };
    });

    const objArray = await Promise.all(userPromises);

    res.json(objArray);
  } catch (error) {
    console.error("Error in adminReports:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
