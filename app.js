const express = require('express'),
  path = require('path'),
  app = express();

// APP CONFIG
// ============
app.use(express.static(path.join(__dirname, 'client/build')));

// FIREBASE CONFIG
// ============
const admin = require('firebase-admin');
const serviceAccount = require('./config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://plant-diary-1e535.firebaseio.com'
});

// ROUTER IMPORTS
// ============
const usersRoutes = require('./routes/users');

// ROUTES CONFIG
// ============
app.use('/users', usersRoutes);

// SERVER CONFIG
// ============
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
