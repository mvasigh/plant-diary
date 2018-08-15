const Plant = require('../models/Plant'),
  User = require('../models/User');

exports.getPlant = function(req, res, next) {
  const { plantId } = req.params;
  Plant.findById(plantId, (err, plant) => {
    if (err) {
      return next(err);
    }
    res.json({ stats: 'success', plant });
  });
};

// TODO: pass user id to user in JWT

exports.createPlant = async function(req, res, next) {
  const user = await User.findOne({ email: req.user.email });
  Plant.create({ ...req.body.plant, owners: [user._id] }, (err, plant) => {
    if (err) {
      return next(err);
    }
    res.json({ status: 'success', plant });
  });
};
