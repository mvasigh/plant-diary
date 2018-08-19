const express = require('express'),
  router = express.Router(),
  { requireAuth } = require('../../middleware'),
  PlantController = require('../../controllers/PlantController');

router.get('/', requireAuth, PlantController.getAllPlants);
router.post('/', requireAuth, PlantController.createPlant);
router.get('/:plantId', requireAuth, PlantController.getPlant);
router.get('/:plantId/water', requireAuth, PlantController.waterPlant);
router.get('/:plantId/fertilize', requireAuth, PlantController.fertilizePlant);

module.exports = router;
