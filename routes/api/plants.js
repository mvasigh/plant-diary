const express = require('express'),
  router = express.Router(),
  { requireAuth } = require('../../middleware'),
  PlantController = require('../../controllers/PlantController');

router.get('/:plantId', PlantController.getPlant);
router.post('/', requireAuth, PlantController.createPlant);

module.exports = router;
