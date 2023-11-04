const express = require('express');

const router = express.Router();

var admin = require("firebase-admin");

router.get('/getCertifications', async (req, res) => {
    
    try {
        const snapshot = await admin.firestore().collection('Certifications').get();
        const certifications = [];
        snapshot.forEach((doc) => {
          certifications.push(doc.data());
        });
        console.log(certifications)
        res.status(200).json(certifications);
      } catch (error) {
        res.status(500).json({ error: 'Error getting certifications' });
      }

})

module.exports = router;
