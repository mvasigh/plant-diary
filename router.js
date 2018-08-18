const indexRoutes = require('./routes/api/index'),
  usersRoutes = require('./routes/api/users'),
  plantsRoutes = require('./routes/api/plants'),
  dayRoutes = require('./routes/api/day');

module.exports = function(app) {
  app.use('/api', indexRoutes);
  app.use('/api/users', usersRoutes);
  app.use('/api/plants', plantsRoutes);
  app.use('/api/day', dayRoutes);
};
