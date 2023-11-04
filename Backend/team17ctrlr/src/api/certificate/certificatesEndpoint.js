const express = require('express');

const router = express.Router();

const apik = require("apiKey")

var admin = require("firebase-admin");

router.post('/', (req, res) => {
    const uid = req.body.uid;
    const data = req.body.data;
    
    // Verify uid && data
    if (!data) {
        res.statusCode = 400;
        res.send("Error: data is undefined");
        return;
    }
    if (!uid) {
        res.statusCode = 400;
        res.send("Error: uid is undefined");
        return;
    }
    admin.app().firestore().collection('Collections').doc(uid).set(data).then((snapshot) => {
        console.log("Document successfully created!");

        res.send("Document successfully created!");

        return snapshot;
    }).catch((error) => {
        console.error("Error creating document: ", error);
         
        res.send("Error creating document: ", error);
    });
});
// New route for generating certificates
router.post('/generate-certificate', (req, res) => {
    fetch("https://api.bannerbear.com/v2/images", {
  method: "POST",
  body: JSON.stringify({
    "template": "w0kdleZGl7rg5orWxN",
  "modifications": [
    {
      "name": "title",
      "text": "You can change this text",
      "color": null,
      "background": null
    },
    {
      "name": "subtitle",
      "text": "You can change this text",
      "color": null,
      "background": null
    },
    {
      "name": "awardee_name",
      "text": "You can change this text",
      "color": null,
      "background": null
    },
    {
      "name": "details",
      "text": "You can change this text",
      "color": null,
      "background": null
    },
    {
      "name": "name_position1",
      "text": "You can change this text",
      "color": null,
      "background": null
    },
    {
      "name": "signature_container1",
      "image_url": "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"
    },
    {
      "name": "name_position2",
      "text": "You can change this text",
      "color": null,
      "background": null
    },
    {
      "name": "signature_container2",
      "image_url": "https://cdn.bannerbear.com/sample_images/welcome_bear_photo.jpg"
    }
  ],
  "webhook_url": null,
  "transparent": false,
  "metadata": null
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});

});

module.exports = router;