const express = require('express'),
  router = express.Router(),
  { requireAuth, requireSignIn } = require('../../middleware');

router.get('/', requireAuth, (req, res, next) => res.send({ hello: 'world' }));

module.exports = router;
