const Plant = require('../models/Plant');

exports.getAllPlants = async function(req, res, next) {
  const plants = await Plant.find({ owners: req.user._id });
  res.json({ status: 'success', response: plants });
};

exports.getPlant = function(req, res, next) {
  const { plantId } = req.params;
  Plant.findById(plantId, (err, plant) => {
    if (err) {
      return next(err);
    }
    res.json({ stats: 'success', response: plant });
  });
};

exports.createPlant = function(req, res, next) {
  Plant.create({ ...req.body.plant, owners: [req.user._id] }, (err, plant) => {
    if (err) {
      return next(err);
    }
    res.json({ status: 'success', response: plant });
  });
};

exports.waterPlant = async function(req, res, next) {
  Plant.findById(req.params.plantId, (err, plant) => {
    if (err) {
      return next(err);
    }
    const match = plant.owners.some(owner => owner.equals(req.user._id));
    if (match) {
      Plant.findByIdAndUpdate(
        req.params.plantId,
        {
          $addToSet: {
            'history.water': Date.now()
          }
        },
        { new: true },
        (err, plant) => {
          if (err) {
            return next(err);
          }
          res.json({ status: 'success', response: plant });
        }
      );
    } else {
      res.json({ status: 'error', response: 'You do not own this plant' });
    }
  });
};

exports.fertilizePlant = async function(req, res, next) {
  Plant.findById(req.params.plantId, (err, plant) => {
    if (err) {
      return next(err);
    }
    const match = plant.owners.some(owner => owner.equals(req.user._id));
    if (match) {
      Plant.findByIdAndUpdate(
        req.params.plantId,
        {
          $addToSet: {
            'history.fertilizer': Date.now()
          }
        },
        { new: true },
        (err, plant) => {
          if (err) {
            return next(err);
          }
          res.json({ status: 'success', response: plant });
        }
      );
    } else {
      res.json({ status: 'error', response: 'You do not own this plant' });
    }
  });
};
