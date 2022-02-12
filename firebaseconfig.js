var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = app;
