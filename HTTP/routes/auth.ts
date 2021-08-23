const express = require('express');
const router = express.Router();
const auth = require('../Controllers/auth');

// Auth Routes...
router.get('/google', auth.authenticate);
router.post('/google/callback', auth.failureRedirect);
router.get('/logout', auth.logout);

module.exports = router;

