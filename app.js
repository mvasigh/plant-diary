const express = require('express'),
  path = require('path'),
  app = express();

// APP CONFIG
// ============
app.use(express.static(path.join(__dirname, 'client/build')));

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
