const express = require('express'),
  app = express(),
  path = require('path'),
  mongoose = require('mongoose'),
  morgan = require('morgan'),
  bodyParser = require('body-parser');

// DB CONFIG
// ============
const mongoURI = process.env.MONGO_URI || require('./config/dbConfig').mongoURI;
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true },
  () => console.log('Connected to database')
);

// APP CONFIG
// ============

// Middleware
// ---
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// Services
// ---
require('./services/passport');

// ROUTER CONFIG
// ============
const indexRoutes = require('./routes/api/index'),
  usersRoutes = require('./routes/api/users'),
  plantsRoutes = require('./routes/api/plants');

app.use('/api', indexRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/plants', plantsRoutes);

// SERVER CONFIG
// ============
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
