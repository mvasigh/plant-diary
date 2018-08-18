const express = require('express'),
  router = express.Router(),
  { requireAuth } = require('../../middleware'),
  PlantController = require('../../controllers/PlantController');

// routes here
router.get('/:timeStamp', PlantController.getDayOverview);

module.exports = router;
