const express = require('express'),
  router = express.Router(),
  { requireAuth } = require('../../middleware'),
  PlantController = require('../../controllers/PlantController');

router.get('/', requireAuth, PlantController.getAllPlants);
router.get('/:plantId', requireAuth, PlantController.getPlant);
router.post('/', requireAuth, PlantController.createPlant);

module.exports = router;
