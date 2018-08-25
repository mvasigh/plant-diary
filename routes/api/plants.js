const express = require('express'),
  router = express.Router(),
  { requireAuth, requirePlantOwnership } = require('../../middleware'),
  PlantController = require('../../controllers/PlantController');

router.get('/', requireAuth, PlantController.getAllPlants);

router.post('/', requireAuth, PlantController.createPlant);

router.get(
  '/:plantId',
  requireAuth,
  requirePlantOwnership,
  PlantController.getPlant
);

router.put(
  '/:plantId',
  requireAuth,
  requirePlantOwnership,
  PlantController.editPlant
);

router.get(
  '/:plantId/water',
  requireAuth,
  requirePlantOwnership,
  PlantController.waterPlant
);

router.get(
  '/:plantId/fertilize',
  requireAuth,
  requirePlantOwnership,
  PlantController.fertilizePlant
);

module.exports = router;
