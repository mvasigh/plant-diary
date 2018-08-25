const passport = require('passport'),
  Plant = require('../models/Plant');

exports.requireAuth = passport.authenticate('jwt', { session: false });

exports.requireSignIn = passport.authenticate('local', { session: false });

exports.requirePlantOwnership = function(req, res, next) {
  Plant.findById(req.params.plantId, (err, plant) => {
    if (err) {
      return next(err);
    }
    const match = plant.owners.some(owner => owner.equals(req.user._id));
    if (!match) {
      return res.json({
        status: 'error',
        response: 'You do not own this plant.'
      });
    }
    next();
  });
};
