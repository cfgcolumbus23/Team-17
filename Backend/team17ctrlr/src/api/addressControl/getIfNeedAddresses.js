var admin = require("firebase-admin");
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const userID = req.query.uid;
  const certificateID = req.query.certificateID;

  try {
    const certResults = await admin.app().firestore().collection('Certifications').doc(certificateID).get();
    const certNeedsAddress = Boolean(certResults.data().needsKit);

    const totalCollection = await admin.app().firestore().collection("Addresses").doc(userID).get();

    if (!totalCollection.exists) {
      // Assuming that certNeedsAddress is a boolean variable that is defined earlier in your code
      if (certNeedsAddress) {
        res.send(true);
      } else {
        res.send(false);
      }
    } else {
      res.send(false);
    }
  } catch (error) {
    console.log(error)
    console.error("Error while fetching data:", error);
    res.status(500).send("An error occurred");
  }
});

module.exports = router;
