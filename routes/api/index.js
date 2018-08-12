const express = require('express'),
  router = express.Router(),
  { requireAuth, requireSignIn } = require('../../middleware');

router.get('/', requireAuth, (req, res, next) => res.send({ user: req.user }));

module.exports = router;
