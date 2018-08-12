const express = require('express'),
  router = express.Router(),
  AuthController = require('../../controllers/AuthController'),
  { requireAuth, requireSignIn } = require('../../middleware');

router.post('/signup', AuthController.signUp);
router.post('/signin', requireSignIn, AuthController.signIn);

module.exports = router;
