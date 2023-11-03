const app = require('./app');

var admin = require("firebase-admin");

var serviceAccount = require("../.ctrl-r-team17-firebase-adminsdk-bnuam-5257d7ed3b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const port = process.env.PORT || 2020;

// admin.app().firestore().collection('Users').get().then((snapshot) => {
//   snapshot.forEach((doc) => {
//     console.log(doc.id, '=>', doc.data());
//   });
//   return snapshot;
// }
// );
app.listen(port, () => {
  
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
