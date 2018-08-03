const express = require('express'),
  router = express.Router(),
  Plant = require('../../models/Plant');

router.get('/:plantId', async (req, res) => {
  const { plantId } = req.params;
  const plant = await Plant.findById(plantId);
  res.json(plant);
});

router.post('/', async (req, res) => {
  const plant = await Plant.create(req.body);
  res.json(plant);
});

module.exports = router;
